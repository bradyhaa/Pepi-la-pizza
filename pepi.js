let welcomeModal = document.getElementById('start-modal');


//Onclick Start 
function start() {
welcomeModal.className = 'modal hidden';

//render the canvas
  let canvas = document.getElementById("game");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");


    /////////// Creating Classes for Players/Characters ////////
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
  ////////  Paint Screen  //////////

  window.addEventListener("game", function(e) {
    peter = new Player(10, 20, peter, 20, 20);
    taxi = new Taxi(100, 200, taxi, 40, 80);

    const runGame = setInterval(gameLoop, 120);
});

document.addEventListener('keydown', movementHandler);

/////////////////////

  //RENDERING
  let street = new Skyline(city);
  street.render();
  
  let parker = new Player(peter);
  parker.render();

  let cab = new Taxi(taxi);
  cab.render();

  }
}

////////  SCROLLLING ANIMATION ///////

let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");
  let image = new Image();

  image.onload = function() {
    let x = 0;
    let width = image.width;
    let min = 0-width;
    let step = 1;

    let loop = function() {
      context.drawImage(image, x, 0);
      context.drawImage(image, x + width, 0);
      x -= step;
      if (x < min) {
        x = 0;
      }
    };
    setInterval(loop, 1000 / 60);
  };

  image.src = 'assets/Long-road-city.png';
  /////////////////////////  GAME LOOP FUNCTION   ///////////////////

  function gameLoop(){
    ctx.clearRect(0, 0, game.width, game.height);
    loop();

    if (peter.alive) {
      peter.render();
    }

    peter.render();
    drawScore();
    endGame();
  }

  ///////////// onload page function
function pageLoad() {
}
///////////  KEYBOARD INTERACTION LOGIC

function movementHandler (e){
  console.log('movement', e.key);
  
  switch(e.key) {
      case 'w':
      // move donkey up
      peter.y - 10 >= 0 ? peter.y -=10 : null;
      break;
      case 'a':
      //move donkey left
      peter.x - 10 >= 0 ? peter.x -=10 : null;
      break;
      case 'd':
      //move donkey right
      peter.x + 10 <= game.width ? peter.x +=10 : null; //ternary operator
      break;
      case 's': 
      // move donkey down
      peter.y + 10 <= game.height ? peter.y +=10 : null;
      break;
  }
}
/////////////////////////////////////////////////////
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
