function Player(x,y,maxHealth,col,size,primWeap){
  
    this.maxHealth = maxHealth;
    this.score = 0;
    this.health = this.maxHealth;
    this.cooldown = 0;
    this.firingPrimary = false;
    this.firingSecondary =false;
    this.facing = 0;
    this.col = col;
    this.x = x;
    this.y = y;
    this.size = size;
    this.xvel = 0;
    this.yvel = 0;
    this.tl = false;
    this.tu = false;
    this.tr = false;
    this.tb = false;
    this.xmulti = 0;
    this.primWeap = primWeap;
    this.playerWhoLastHit = -1;

}


var players = new Array();

/*Gun Names = 
weapons 'pistol'
weapons 'sir_razington_the_third'
weapons 'sniper'
weapons 'shotgun'
weapons 'callum'

*/

//green
players[0] = new Player(100,100,100,"#47B06B",25,weapons['sniper']);
//orange
players[1] = new Player(400,100,100,"#FC9E35",25,weapons['pistol']);
//red
players[2] = new Player(200,200,100,'#9C3838',25,weapons['shotgun']);
//blue
//players[3] = new Player(300,200,100,'#50A0DF',25,weapons['pistol']);
console.log(players);
//players[0] = {score:0,health:100,cooldown:0,firing:false,facing:0,col:"#47B06B",x:100, y:100, size:25,xvel:0,yvel:0,tl:false,tu:false,tr:false,tb:false,xmulti:1}
//players[1] = {score:0,health:100,cooldown:0,firing:false,facing:0,col:"#FC9E35",x:400, y:100, size:25,xvel:0,yvel:0,tl:false,tu:false,tr:false,tb:false,xmulti:1}
