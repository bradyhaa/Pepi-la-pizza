/// GLOBAL VARIABLES GRABBER
let welcomeModal = document.getElementById('start-modal');
let startButton = document.getElementById('start')
let movementDisplay = document.querySelector('#movement');
let runGame;


// RENDER CANVAS
  let canvas = document.getElementById("game");
  let ctx = canvas.getContext("2d");

// SET UP CANVAS RENDERING
game.setAttribute('height', getComputedStyle(canvas)['height']);
game.setAttribute('width', getComputedStyle(canvas)['width']);


////// SET UP CANVAS RENDERING
window.addEventListener('DOMContentLoaded', function(e) {

  taxi = new Taxi(taxi, 460, 205);
  peter = new Player(peter, 60, 240);

  runGame = setInterval(gameLoop, 1000/60);

});

//////  EVENT LISTENERS ///////

document.addEventListener('keydown', movementHandler);

///////////  CLASS  PLAYERS/CHARACTERS ////////
    city = new Image();
    city.src = 'assets/Long-road-city.png';

class Skyline {
  constructor(img) {
    this.img = img,
    this.render = function() {
      ctx.drawImage(img, 0, 0)
    }
  }
}

peter = new Image();
peter.src = 'assets/spideyman.png';
  class Player{
    constructor(img, x, y){ 
      this.alive = true;
      this.x = x;
      this.y = y;
      this.img = img,
       this.render = function() {
         ctx.drawImage(img, this.x, this.y);
       }

    }
  }
  taxi = new Image();
  taxi.src = 'assets/taxi.png';

  class Taxi {
    constructor(img) {
      this.img = img,
      this.render = function() {
        ctx.drawImage(img, 220, 280)
      }
    }
  }

///////////  KEYBOARD INTERACTION LOGIC

function movementHandler (e){
  console.log('movement', e.key);
  
  switch(e.key) {
      case 'w':
      // move spidey up
      peter.y - 10 >= 0 ? peter.y -=10 : null;
      break;
      case 'a':
      //move spidey left
      peter.x - 10 >= 0 ? peter.x -=10 : null;
      break;
      case 'd':
      //move spidey right
      peter.x + 10 <= game.width ? peter.x +=10 : null; //ternary operator
      break;
      case 's': 
      // move spidey down
      peter.y + 10 <= game.height ? peter.y +=10 : null;
      break;
  }
}
////////////////////////////////////

 ///////////// ONLOAD FUNCTION
 function pageLoad() {
}

/// Start Button ONCLICK FUNCTION ///
function start() {
  console.log('startfunction started');
  welcomeModal.className = 'modal hidden';
  startButton.className = 'button hidden'

  startButton.className = 'buttonhidden';

  gameLoop();
}
//startButton.onclick = function(){console.log('yay')};


 ////////  SIDE SCROLL
   let x = 0;
   let width = city.width;
   let min = 0-width;
   let step = 1;
 
 function loop() {
  ctx.drawImage(city, x, 0);
  ctx.drawImage(city, x + width, 0);
  taxi.render();
  peter.render();
  x -= step;
  if (x < min) {
    x = 0;
  }
 };
 image.src = 'assets/Long-road-city.png';



  /////////////////////////  GAME LOOP FUNCTION   ///////////////////
  function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    loop();

    movementDisplay.textContent = 'X:${parker.x}nY:${parker.y}';
  
    if (peter.alive) {
      peter.render();
    }
    peter.render();
  }
  
//////////////////// PAINT THE SCREEN
window.addEventListener("game", function(e) {
  peter = new Player(10, 20, peter, 20, 20);
  taxi = new Taxi(100, 200, taxi, 40, 80);

  const runGame = setInterval(gameLoop, 120);
});

document.addEventListener('keydown', movementHandler);


//  //RENDERING
//  let street = new Skyline(city);
//  street.render();
 
//  let parker = new Player(peter);
//  parker.render();

//  let cab = new Taxi(taxi);
//  cab.render();

//  }
// }