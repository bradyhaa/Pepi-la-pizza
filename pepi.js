function draw() {
  let canvas = document.getElementById("game");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    city = new Image();
city.src = 'assets/citylong.png';

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
    constructor(img){ 
      this.img = img,
       this.render = function() {
         ctx.drawImage(img, 150, 250);
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

  //RENDERING
  let parker = new Player(peter);
  parker.render();

  let cab = new Taxi(taxi);
  cab.render();

  let street = new Skyline(city);
  street.render();

  }
}


function init() {
  return gameState = {
      gravity: 1,
      score: 0,
      mode: "Regular Mode",
      gameRunning: true,
      peter: {
          peterPause: false,
          x: canvasWidth/14,
          y: (canvasHeight*3)/7,
          height: 50,
          width: 60,
          wings: 10,
          velocity: 3.5,
          beeMoveUp: false,
          beeMoveDown: false,
          beeMoveLeft: false,
          beeMoveRight: false,
          hasStinger: true, // stinger false means bee is dead
          typeOfDeath: "none",
      },
      pauseMS: 300,
      flowers: [],
      flowerWidth: canvasWidth/14,
      flowerHeight: canvasHeight,
      flowerNum: 0,
      maxFlowers: 30,
      flowerFreqMin: 1500,
      flowerFreqMax: 500,
      enemies: {
          wasps: {
              inGame: true,
              width: 80,
              height: 70,
              wingHeight: 10,
              freqMin: 7000,
              freqMax: 3000,
              maxWasps: 10,
              waspsNum: [],
          },
          dasBoot: {
              inGame: false,
          },
          windGusts: {
              inGame: false,
          },
          wateringCan: {
              inGame: false,
          }
      },
  }
}



//     // const img = new Image(243, 143);
//     // img.src = 'assets/taximan.jpeg';
//     // document.body.appendChild(img);

// //     taxi = new Image();
// //     taxi.src = "assets/taxi.png";
// //     ctx.drawImage(taxi, 400, 280);

// //     peter = new Image();
// //     peter.src = "assets/spideyman.png";
// //     ctx.drawImage(peter, 300, 280);

// //     city = new Image();
// //     city.src = "assets/citylong.png";
// //     ctx.drawImage(city, 0, 0);

// //   }
// }

// city = new Image();
// city.src = 'assets/citylong.png';

// class Skyline {
//   constructor(img) {
//     this.img = img,
//     this.render = function() {
//       ctx.drawImage(img, 0, 0)
//     }
//   }
// }

// peter = new Image();
// peter.src = 'assets/spideyman.png';

//   class Player{
//     constructor(img){ 
//       this.img = img,
//        this.render = function() {
//          ctx.drawImage(img, 50, 50);
//        }

//     }
//   }

//   taxi = new Image();
//   taxi.src = 'assets/taxi.png'

//   class Taxi {
//     constructor(img) {
//       this.img = img,
//       this.render = function() {
//         ctx.drawImage(img, 30, 20)
//       }
//     }
//   }



//   //RENDERING
//   let parker = new Player(peter);
//   parker.render();

//   let cab = new Taxi(taxi);
//   cab.render();

//   let street = new Skyline(city);
//   street.render();


  


// //Need game play function(gameloop)
// //scroll function
// // function scroll(){


// // }
// //player class
// //need a taxi-lane function(sends taxi down the road)
// //need detect hit function 
// //call scroll function only while game is being played




// // let cityWidth = 10;
// // let scrollSpeed = 10;
// // function scroller() {
// //         ctx.drawImage(city, 0, citywidth);
// //         ctx.drawImage(city, 0, cityWidth - game.width);
// //         cityWidth += scrollSpeed;
// //         if (cityWidth >= game.width) {
// //         cityWidth = 0;
// //         }   
// // }
// // function gameLoop () {
// // ctx.clearRect(0, 0, game.width, game.height);
// // scroller();

// // if (peter.alive) {
// //   peter.render();
// // }


// // }

// //   class Crawler{
// //     constructor(x, y, color, width, height,) { // creates the shrek character
// //         this.x = x;
// //         this.y = y;
// //         this.img = img;
// //         this.color = color;
// //         this.width = width;
// //         this.height = height;
// //         this.alive = true

// //         this.render = function() {
// //             ctx.fillStyle = this.color // change the color of the context(ctx)
// //             ctx.fillRect(this.x, this.y, this.width, this.height) //creating a rectangle on x and y coordinates, with a width and height
// //         }
// //     }

// // }

// // let peter = new Crawler(100, 100, 'red', 35, 25);
// // console.log(peter);
// // peter.render();

// // let taxi = new Crawler(150, 150, 'yellow', 70, 25);
// // console.log(taxi);
// // taxi.render();
