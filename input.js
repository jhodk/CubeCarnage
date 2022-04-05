
window.addEventListener("keydown", function(e){


    switch(e.keyCode) {
       
        case 87:
            players[0].up = true;
            break;
        case 83:
            players[0].down = true;
            break;
        case 65:
            players[0].left = true;
            players[0].xmulti = 1;
            break;
        case 68:
            players[0].right = true;
            players[0].xmulti = 1;
            break;
        case 90:
            players[0].firingPrimary = true;
            break;
            
            
          case 73:
            players[1].up = true;
            
            break;
        case 75:
            players[1].down = true;
            break;
        case 74:
            players[1].left = true;
              players[1].xmulti = 1;
       
            break;
        case 76:
            players[1].right = true;
            players[1].xmulti = 1;
            break;
             case 77:
        players[1].firingPrimary = true;
            break;
            
            
            case 38:
            players[2].up = true;
            e.preventDefault();
            break;
        case 40:
            players[2].down = true;
            e.preventDefault();
            break;
        case 37:
            players[2].left = true;
            e.preventDefault();
              players[2].xmulti = 1;
       
            break;
        case 39:
            players[2].right = true;
            e.preventDefault();
            players[2].xmulti = 1;
            break;
             case 32:
        players[2].firingPrimary = true;
            break;
        
        }
        for(var i = 0;i<players.length;i++){
            
    if(players[i].gamepad == false){setKeyboardPlayerFacing(i);}
}
        
        }
        );
        
window.addEventListener("keyup", function(e){
    
    
    switch(e.keyCode) {
        
        case 87:
            players[0].up = false;
            
            break;
        case 83:
            players[0].down = false;
            break;
        case 65:
            players[0].left = false;
       
            break;
        case 68:
            players[0].right = false;
          
            break;
             case 90:
        players[0].firingPrimary = false;
            break;
            
            
        case 73:
            players[1].up = false;
            
            break;
        case 75:
            players[1].down = false;
            break;
        case 74:
            players[1].left = false;
       
            break;
        case 76:
            players[1].right = false;
          
            break;
             case 77:
        players[1].firingPrimary = false;
            break;
            
        
        case 38:
            players[2].up = false;
            
            break;
        case 40:
            players[2].down = false;
            break;
        case 37:
            players[2].left = false;
              players[2].xmulti = 1;
       
            break;
        case 39:
            players[2].right = false;
            players[2].xmulti = 1;
            break;
             case 32:
        players[2].firingPrimary = false;
            break;
        
        
        }
        
        for(var i = 0;i<players.length;i++){
    if(players[i].gamepad == false){setKeyboardPlayerFacing(i);}
}
        
        }
        );
        
//####
var haveEvents = 'ongamepadconnected' in window;
var controllers = {};

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;

 
  // See https://github.com/luser/gamepadtest/blob/master/index.html

  requestAnimationFrame(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  delete controllers[gamepad.index];
}

function buttonPressed(b){
    if(typeof(b)=="object") {
        return b.pressed;
    }
    return b == 1.0;
}

function updateStatus() {
  if (!haveEvents) {
    scangamepads();
  }

  var i = 0;
  var j;

  for (j in controllers) {
      
    var controller = controllers[j];
    a = controller.index;
    /*for (i = 0; i < controller.buttons.length; i++) {
      var b = 
      
      [i];
      var val = controller.buttons[i];
      var pressed = val == 1.0;
      if (typeof(val) == "object") {
        pressed = val.pressed;
        val = val.value;
      }

      if (pressed) {
        b.className = "button pressed";
      } else {
        b.className = "button";
      }
    }*/
    
    if(buttonPressed(controller.buttons[0])){players[a].up = true;}
    else{players[a].up = false;}
    if(buttonPressed(controller.buttons[5])){players[a].firingPrimary = true;players[a].firingSecondary = false;}
    else{players[a].firingPrimary = false;}
    if(buttonPressed(controller.buttons[4])){players[a].firingPrimary = false;players[a].firingSecondary = true;}
    else{players[a].firingSecondary = false;}
    xaxis = controller.axes[0].toFixed(4);
    yaxis = controller.axes[1].toFixed(4);
    if(xaxis > 0.2){players[a].right = true;players[a].xmulti = xaxis/(1-0.2);}
    else{players[a].right = false;}
    if(xaxis < -0.2){players[a].left = true;players[a].xmulti = xaxis/(-1+0.2);}
    else{players[a].left = false;}

    if(Math.pow(yaxis,2) + Math.pow(xaxis,2) > 0.5) {
        
        angle = Math.atan2(yaxis,xaxis);
         
        
        angle = Math.floor((angle+Math.PI/8)/(Math.PI/4))*(Math.PI/4);
        
        players[a].facing = angle;
       
        }


    }
  requestAnimationFrame(updateStatus);
}

function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
        players[i].gamepad = true;
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addgamepad(gamepads[i]);
      }
    }
  }
}


window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
  setInterval(scangamepads, 500);
}

//####
