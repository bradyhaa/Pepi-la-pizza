/// GLOBAL VARIABLES GRABBER
let welcomeModal = document.getElementById("start-modal");
let startButton = document.getElementById("start");
let movementDisplay = document.querySelector("#movement");
let timer;
let timeLeft = 120;

// RENDER CANVAS
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

// SET UP CANVAS RENDERING
game.setAttribute("height", getComputedStyle(canvas)["height"]);
game.setAttribute("width", getComputedStyle(canvas)["width"]);

////// SET UP CANVAS RENDERING
window.addEventListener("DOMContentLoaded", function (e) {
  taxi = new Taxi(taxi, 460, 205);
  peter = new Player(peter, 60, 240);
  car = new Image(car, 60, 30);

  runGame = setInterval(gameLoop, 1000 / 60);
});

//////  EVENT LISTENERS ///////

document.addEventListener("keydown", movementHandler);




///////////  CLASS  PLAYERS/CHARACTERS ////////
city = new Image();
city.src = "assets/Long-road-city.png";

class Skyline {
  constructor(img) {
    (this.img = img),
      (this.render = function () {
        ctx.drawImage(img, 0, 0);
      });
  }
}

peter = new Image();
peter.src = "assets/spideyman.png";
class Player {
  constructor(img, x, y) {
    this.alive = true;
    this.x = x;
    this.y = y;
    (this.img = img),
      (this.render = function () {
        ctx.drawImage(img, this.x, this.y);
      });
  }
}
taxi = new Image();
taxi.src = "assets/taxi.png";

class Taxi {
  constructor(img) {
    (this.img = img),
      (this.render = function () {
        ctx.drawImage(img, 220, 280);
      });
  }
}

let car = new Image(); car.src = "assets/spritesheet.png";
        let carWidth = 60;
        let carHeight = 30;
        let carX1 = 100;
        let carSX1 = 0;
        let carY1 = 320;
        let carX2 = 430;
        let carSX2 = 71;
        let carY2 = 320;
        let carX3 = 650;
        let carSX3 = 142;
        let carY3 = 282;
        let carX4 = 230;
        let carSX4 = 213;
        let carY4 = 282;
        let carX5 = 0;
        let carSX5 = 0;
        let carY5 = 245;
        let carX6 = 430;
        let carSX6 = 71;
        let carY6 = 245;
        // let carX7 = 650;
        // let carSX7 = 71;
        // let carY7 = 200;
        // let carX8 = 250;
        // let carSX8 = 142;
        // let carY8 = 200;

        function drawCars() {

            let carsSX = [carSX1, carSX2, carSX3, carSX4, carSX5, carSX6];
            let carsX = [carX1, carX2, carX3, carX4, carX5, carX6];
            let carsY = [carY1, carY2, carY3, carY4, carY5, carY6];

            for (i=0; i < carsX.length; i++) {
                ctx.drawImage(car, carsSX[i], 0, 71, 56, carsX[i], carsY[i], carWidth, carHeight);
            }
        }

        function moveCars() {
            
            if (carX1 <= 700 && carX1 > -200) {
                carX1 = carX1 - 2;
                } else {
                    carX1 = 700;
                    carSX1 = (Math.floor(Math.random() * 4) * 71);
                    }
                    
            
            if (carX2 <= 700 && carX2 > -200) {
                carX2 = carX2 - 4;
                } else {
                    carX2 = 700;
                    carSX2 = (Math.floor(Math.random() * 4) * 71);
                    }

            if (carX3 <= 700 && carX3 > -200) {
                carX3 = carX3 - 4;
                } else {
                    carX3 = 700;
                    carSX3 = (Math.floor(Math.random() * 4) * 71);
                    }
            
            if (carX4 <= 700 && carX4 > -200) {
                carX4 = carX4 - 3;
                } else {
                    carX4 = 700;
                    carSX4 = (Math.floor(Math.random() * 4) * 71);
                    }

            if (carX5 <= 700 && carX5 > -200) {
                carX5 = carX5 - 5;
                } else {
                    carX5 = 700;
                    carSX5 = (Math.floor(Math.random() * 4) * 71);
                    }

            if (carX6 <= 700 && carX6 > -200) {
                carX6 = carX6 - 6;
                } else {
                    carX6 = 700;
                    carSX6 = (Math.floor(Math.random() * 4) * 71);
                    }
        }

        function runOver () {
            let carsX = [carX1, carX2, carX3, carX4, carX5, carX6];
            let carsY = [carY1, carY2, carY3, carY4, carY5, carY6];

            for (i = 0; i < carsX.length; i++) {
            if (carsX[i] <= (peter.x + peter.width) &&
                carsX[i] + (carWidth >= parker.x) &&
                carsY[i] + (carHeight >= peter.y) &&
                carsY[i] <= (peter.y + peter.height)) {
                    gameOver();
                }
            }
        }

///////////  KEYBOARD INTERACTION LOGIC

function movementHandler(e) {
  console.log("movement", e.key);

  switch (e.key) {
    case "w":
      // move spidey up
      peter.y - 10 >= 0 ? (peter.y -= 22) : null;
      break;
    case "a":
      //move spidey left
      peter.x - 10 >= 0 ? (peter.x -= 15) : null;
      break;
    case "d":
      //move spidey right
      peter.x + 10 <= game.width ? (peter.x += 15) : null; //ternary operator
      break;
    case "s":
      // move spidey down
      peter.y + 10 <= game.height ? (peter.y += 22) : null;
      break;
  }
}
////////////////////////////////////

///////////// ONLOAD FUNCTION
function pageLoad() {}

/// Start Button ONCLICK FUNCTION ///
function start() {
  console.log("startfunction started");
  welcomeModal.className = "modal hidden";
  startButton.className = "button hidden";

  startButton.className = "buttonhidden";

  gameLoop();
  refresh();
}
//// TAXI MOVEMENT
function runOver () {
  let carsX = [carX1, carX2, carX3, carX4, carX5, carX6];
  let carsY = [carY1, carY2, carY3, carY4, carY5, carY6];

  for (i = 0; i < carsX.length; i++) {
  if (carsX[i] <= peter.x + peter.width &&
      carsX[i] + carWidth >= peter.x &&
      carsY[i] + carHeight >= peter.y &&
      carsY[i] <= peter.y + peter.height) {
          gameOver();
      }
  }
}

//startButton.onclick = function(){console.log('yay')};
///////// TIMER FUNCTION /////////

// function startclock() {
//   timer = setInterval(updateTimer, 1000);
//   updateTimer();
// }

// function updateTimer() {
//   timeLeft = timeLeft - 1;
//   if(timeLeft >= 0){
//     timeDisplay.textContent = `${timeLeft} seconds remaining!`
//   } else {
//     gameOver();
//     gameStatus = false;
//   }

// }
// function gameOver() {
//   timeDisplay.textCotnent = 'GAME-OVER'
//   clearInterval(timer);
//   document.removeEventListener('keydown', movementHandler, flase);
// }
// setinterval to count every second
// update timer function
// no game statusno time display
// no game status needed
// only need clear setInterval

////////  SIDE SCROLL
let x = 0;
let width = city.width;
let min = 0 - width;
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
}
//  image.src = 'assets/Long-road-city.png';

/////////////////////////  GAME LOOP FUNCTION   ///////////////////
function gameLoop() {
  ctx.clearRect(0, 0, game.width, game.height);
  loop();

  movementDisplay.textContent = "X:${parker.x}nY:${parker.y}";

  if (peter.alive) {
    peter.render();
  }
  peter.render();
}

/// GAME OVER Function
function gameOver() {
  let GOModal = document.getElementById('GO-modal');
  GOModal.classList.remove('hidden');
  restart = document.getElementById('start');
  restart.onclick = function() {
    start();
    GOModal.classList.add('hidden');
  }
    document.getElementById('start').classList.remove('hidden');
  };

//////////////////// PAINT THE SCREEN
window.addEventListener("game", function (e) {
  peter = new Player(10, 20, peter, 20, 20);

  const runGame = setInterval(gameLoop, 120);
});

document.addEventListener("keydown", movementHandler);

///CLOCK FUNCTION
let countDownEl = document.getElementById("timer");

const startingMinutes = 1;
let time = startingMinutes * 60;

function updateCountDown() {
  time = time - 1;
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  countDownEl.innerHTML = minutes + ":" + seconds;

  if (time === 0) {
    countDownEl.innerHTML = "You WON you made it!";
    countDownEl.style.color = "red";
    gameOver();
  }
  
}

let clearT;

function refresh() {
  clearTimeout(clearT);
  time = startingMinutes * 60;
  clearT = setInterval(updateCountDown, 1000);
}


//  //RENDERING
//  let street = new Skyline(city);
//  street.render();

//  let parker = new Player(peter);
//  parker.render();

//  let cab = new Taxi(taxi);
//  cab.render();

//  }
// }
