
canvas = document.getElementById('cvs');

ctx = canvas.getContext('2d');
this.main();
var fps = 60;
var interval = 1000/fps;
var d = new Date().getTime();
var lastTime = 0;
var currentTime  =    d;
var delta = 0;
var x = 50;

var w = 1400;
var h = 840;
var r = 21;
var c = 35;
var cellSize = w/c;
var gameTransitioning = false;
var gravity = 0.4;

var sounds = [];
sounds['hit'] = new Howl({urls:['https://raw.githubusercontent.com/EncounterQ/Project1/master/Hit_Hurt24.wav']});
sounds['death'] = new Howl({urls:['https://raw.githubusercontent.com/EncounterQ/Project1/master/death.wav']});
sounds['Snipershot'] = new Howl({urls:['https://raw.githubusercontent.com/EncounterQ/Project1/master/shot.wav']});
sounds['Pistolshot']= new Howl({urls:['https://raw.githubusercontent.com/EncounterQ/Project1/master/pistolshot.wav']});
sounds['Shotgunshot'] = sounds['Snipershot'];
//define players

//canvas.addEventListener("mousedown", function(e){players[0].xvel -=15;},false);
//define bullets
var bullets = new Array(500);
for(i=0;i<bullets.length;i++){
    bullets[i] = {size:10,active:false,x:0,y:0,xvel:0,yvel:0,owner:0,damage:1,targetKnockback:1}
    }
    //set up map for first play
gameTransitioning = true;
currentMap--;
nextMap();
function main() {
     
        window.requestAnimationFrame( main );
        
        currentTime = (new Date()).getTime();
        delta = (currentTime-lastTime);

        if(delta > interval) {
           //main game loop
           ctx.clearRect(0,0,w,h);
           
            handleGuns();
            updatePositions();
            renderMap();
            for(i = 0; i < players.length; i++){
                //draw players
            renderPlayer(i);           
          }
          renderBullets();
          
          
           if(gameTransitioning){ctx.globalAlpha = 0.5;ctx.fillStyle="#888888";
              ctx.fillRect(0,0,w,h);}
          
          //draw scores
          for(xx = 0; xx < players.length;xx++){
              ctx.globalAlpha = 0.7;
              ctx.fillStyle = players[xx].col;
              ctx.font='80px "You\'re Gone"';
              if(xx==0){ctx.fillText(players[xx].score.toString(), 75, 100);}
              if(xx==1){ctx.fillText(players[xx].score.toString(), 1325, 100);}
               if(xx==2){ctx.fillText(players[xx].score.toString(), 75, 800);}
                if(xx==3){ctx.fillText(players[xx].score.toString(), 1325, 800);}
             
              ctx.globalAlpha = 1;
              
              if(players[xx].score >= 3){
                  ctx.fillStyle = players[xx].col;
                  ctx.fillText('PLAYER ' + (xx + 1) + ' WINS',w/2,h/2);
                  if(!gameTransitioning){
                      gameTransitioning = true;
                      window.setTimeout(function(){nextMap();},4000);
                      }
                  }
              }
             
        //draw map name
        ctx.textAlign = "center";
        ctx.fillStyle = "#888888";
        ctx.globalAlpha = 0.6;
        ctx.fillText (mapNames[currentMap],w/2,825);
        ctx.globalAlpha = 1;
              
        
          
        }
      
        
      
        lastTime = currentTime - (delta % interval);

    }
    
function nextMap() {
        
        currentMap++;
        
        if(currentMap == Object.keys(maps).length){currentMap = 0;}
            map = maps[mapNames[currentMap]];
            for(var i=0;i<players.length;i++){
            players[i].score = 0;
            }
        setUpMap();
        for(var i=0;i<players.length;i++){
           
            respawnPlayer(i);
            }
        gameTransitioning = false;
        console.log(gameTransitioning);
   }
   
   //reset position of player on death
function respawnPlayer(n){
    
    spawn = Math.floor(Math.random() * spawnPoints.length);
    if(spawn == spawnPoints.length) {spawn = 0;}
    
    players[n].health = players[n].maxHealth;
    players[n].xvel = 0;
    players[n].yvel = 0;
    players[n].playerWhoLastHit = -1;
  
    players[n].x = spawnPoints[spawn].x*cellSize + Math.random()*(cellSize-players[n].size);
    players[n].y = spawnPoints[spawn].y*cellSize + Math.random()*(cellSize-players[n].size);
    
    
    }

    
function mod(a,b) {
//    return a%b;
    var c = a % b;
    if(c < 0) {return Math.abs(b+c);}
    return c;
    
    }
    
function updatePositions() {

//move bullets
for(var b=0;b<bullets.length;b++){
    if(bullets[b].x < 0 || bullets[b].x > w || bullets[b].y < -200 || bullets[b].y > h){bullets[b].active = false;}
    if(bullets[b].active){
        bullets[b].x+=bullets[b].xvel;
        bullets[b].y+=bullets[b].yvel;
        //detect if bullets hit player
        for(var k=0;k<players.length;k++){
            
            if(bullets[b].owner != k) {
                
                if(bullets[b].x +bullets[b].size >= players[k].x && bullets[b].x <= players[k].x + players[k].size
                   && bullets[b].y + bullets[b].size >= players[k].y && bullets[b].y <= players[k].y + players[k].size) {
                
                bullets[b].active = false;
                //knockback player
                players[k].yvel += bullets[b].targetKnockback*bullets[b].yvel;
               
                players[k].xvel += bullets[b].targetKnockback*bullets[b].xvel;
                players[k].health -= bullets[b].damage;
                players[k].playerWhoLastHit = bullets[b].owner;
                
                sounds['hit'].play();
                
                //detect if player is killed and who by
                if(players[k].health <= 0) {
                    respawnPlayer(k);
                    sounds['death'].play();
                   if(!gameTransitioning){ players[bullets[b].owner].score++;}
                    }
                
                
                }
                }
            
            }
            
        //detect if bullet hits wall
        bcm = {x:Math.floor(bullets[b].x/cellSize),y:Math.floor(bullets[b].y/cellSize)};
        if(getTileType(bcm.x,bcm.y) == 'X' || ( getTileType(bcm.x,bcm.y+1) == 'X' && mod(bullets[b].y,cellSize) > cellSize - bullets[b].size)
           || (getTileType(bcm.x+1,bcm.y) == 'X' && mod(bullets[b].x,cellSize) > cellSize - bullets[b].size)
           ||( getTileType(bcm.x+1,bcm.y+1) == 'X' && mod(bullets[b].x,cellSize) > cellSize - bullets[b].size && mod(bullets[b].y,cellSize) > cellSize - bullets[b].size)){
               
               bullets[b].active = false;
               
    }
    
    }
    
    
    }



//deal with player collision with walls
for(var i=0;i<players.length;i++){
    if(players[i].cooldown > 0){players[i].cooldown--;}
   players[i].yvel += gravity;
  players[i].tu = false;
  players[i].tl = false;
  players[i].tr = false;
  players[i].tb = false;
    if (players[i].down==true){players[i].yvel += .2;}
    if (players[i].left==true){players[i].xvel -=.2*players[i].xmulti;}
    if (players[i].right==true){players[i].xvel += .2*players[i].xmulti;}
    if (players[i].yvel < 0.4 * -cellSize){players[i].yvel = 0.4 * -cellSize;}
    if (players[i].yvel > 0.4 * cellSize){players[i].yvel = 0.4 * cellSize;}
   // if (players[i].xvel < 0.4 * -cellSize){players[i].xvel = 0.4 * -cellSize;}
  //  if (players[i].xvel > 0.4 * cellSize){players[i].xvel = 0.4 * cellSize;}
    players[i].xvel -= 0.02*players[i].xvel;
    players[i].x += players[i].xvel;
    players[i].x = parseFloat(players[i].x.toFixed(2));
  
    //want cell number that top left corner is inside of
    cellMod = {x:Math.floor(players[i].x/cellSize),y:Math.floor(players[i].y/cellSize)};

     //hitting left wall?
    
        if(getTileType(cellMod.x,cellMod.y) == "X" || (mod(players[i].y,cellSize) > cellSize - players[i].size && getTileType(cellMod.x,cellMod.y+1) == "X")) {
            players[i].xvel *= -0.15;
            players[i].yvel -= 0.2 * players[i].yvel;
            players[i].x = (cellMod.x+1)*cellSize;
            cellMod.x = Math.floor(players[i].x/cellSize);
            players[i].tl = true;
        }
    
    
    //hitting right wall?
    if (mod(players[i].x,cellSize) > cellSize - players[i].size) {
        
    if(getTileType(cellMod.x+1,cellMod.y)=="X" || (getTileType(cellMod.x+1,cellMod.y+1)=="X" && mod(players[i].y,cellSize) > cellSize - players[i].size)){
        players[i].xvel *= -0.15;
        players[i].yvel -= 0.2 * players[i].yvel;
        players[i].x = (cellMod.x+1)*cellSize-players[i].size;
        cellMod.x = Math.floor(players[i].x/cellSize);
        players[i].tr = true;

    }
    }
    
    players[i].y += players[i].yvel;
    players[i].y = parseFloat(players[i].y.toFixed(2));
    cellMod.y = Math.floor(players[i].y/cellSize);
    //hitting floor?
    if(mod(players[i].y,cellSize) > cellSize - players[i].size) {
        
       if(getTileType(cellMod.x,cellMod.y+1) == "X" || (mod(players[i].x,cellSize) > cellSize - players[i].size && getTileType(cellMod.x+1,cellMod.y+1) == "X")){ 
        players[i].yvel =0;
        players[i].xvel -=0.04*players[i].xvel;
        players[i].y = (cellMod.y+1) * cellSize - players[i].size;
        cellMod.y = Math.floor(players[i].y/cellSize);
        players[i].tb = true;
       // console.log('floor');
    }
    }
    //hitting ceiling?
    if(getTileType(cellMod.x,cellMod.y) == "X"|| mod(players[i].x,cellSize) > cellSize - players[i].size && getTileType(cellMod.x+1,cellMod.y) == "X") {
        players[i].yvel *= -0.1;
        players[i].y = (cellMod.y+1)*cellSize;
    }
  
  
    if(players[i].tb && players[i].up) {players[i].yvel -=10;}
    if(players[i].up && players[i].yvel >= -2 && (players[i].tr || players[i].tl) && !players[i].tb){players[i].yvel-=9;players[i].xvel += 3*(-players[i].tr +players[i].tl);}
    if(players[i].y > h + 200 || players[i].x < -150 || players[i].x > w + 150){
            if(!gameTransitioning){
            if(players[i].playerWhoLastHit == -1){players[i].score--;}
            else{players[players[i].playerWhoLastHit].score++;}}
            sounds['death'].play();
            respawnPlayer(i);
        
        }
  }
  
  }

//draw map tiles
function renderMap() {
  
    
    for(var j = 0; j<r; j++) {
        for(var i = 0; i<c; i++) {
            
        ctx.fillStyle = cols[map[j].charAt(i)];
        ctx.fillRect(i*cellSize,j*cellSize, cellSize, cellSize);
            
            
        }
        
    }
    
    }
    


//draw bullets
function renderBullets() {
    
    for(var i=0;i<bullets.length;i++){
        
        if(bullets[i].active){
      
        ctx.fillStyle = players[bullets[i].owner].col;
        ctx.fillRect(bullets[i].x,bullets[i].y,bullets[i].size,bullets[i].size);
        }
        }
    
    }

function getTileType(x,y) {
    if(x>-1&& y>-1 && x<c && y<r){
    return map[y].charAt(x);}
    return 'na';
    
    }
//deal with guns
function handleGuns() {
    
for(var j=0;j<players.length;j++){
    if(players[j].firingPrimary && players[j].cooldown ==0){
        players[j].cooldown = players[j].primWeap.cooldown;
        
        //going to shoot
        sounds[players[j].primWeap.name + 'shot'].play();
        for(var f=0;f<players[j].primWeap.numberFired;f++){
        
        b = getFreeBullet();
       
        if(b>-1){
        players[j].cooldown = players[j].primWeap.cooldown;
        bullets[b].active = true;
        bullets[b].owner = j;
        bullets[b].damage = players[j].primWeap.damage;
        bullets[b].size = players[j].primWeap.bulletSize;
        bullets[b].targetKnockback = players[j].primWeap.targetKnockback;

        angle = players[j].facing;
        angle += -players[j].primWeap.spread + 2*players[j].primWeap.spread*Math.random();
       bullets[b].x = players[j].x + (players[j].size/2) + Math.cos(angle);
        bullets[b].y = players[j].y + (players[j].size/2) + Math.sin(angle);
        bullets[b].xvel = Math.cos(angle) * players[j].primWeap.projectileSpeed;
        
        bullets[b].yvel = Math.sin(angle) * players[j].primWeap.projectileSpeed;
        if(f==0){
        players[j].xvel -= bullets[b].xvel * players[j].primWeap.shooterKnockback;
        players[j].yvel -= bullets[b].yvel *players[j].primWeap.shooterKnockback;
        }
        }
                    
                }
    }
    
    }
    
    
    }
    
    
    
function renderPlayer(playerNo) {
    
    i = playerNo;
      ctx.globalAlpha=0.4;
            ctx.fillStyle = players[i].col;
            ctx.fillRect(players[i].x,players[i].y,players[i].size,players[i].size);
            ctx.globalAlpha = 1;
            ctx.fillStyle = players[i].col;
            //fill based on health
            healthProp = (players[i].health)/100;
            ctx.fillRect(players[i].x + (1-healthProp)*(players[i].size/2),players[i].y+(1-healthProp)*(players[i].size/2),players[i].size*healthProp,players[i].size*healthProp);
            
            ctx.fillRect(players[i].x + players[i].size/2 + players[i].size*1*Math.cos(players[i].facing),
                         players[i].y + players[i].size/2+  players[i].size*1*Math.sin(players[i].facing),
                        6,6);
}
function getFreeBullet(){
    
    for(i=0;i<bullets.length;i++){
        if(!bullets[i].active){return i}
    
    }
    return -1;
    }
    
    