function draw() {
    let canvas = document.getElementById('game');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
    

// const img = new Image(243, 143);
// img.src = 'assets/taximan.jpeg';
// document.body.appendChild(img);

taxi = new Image();
taxi.src = 'assets/taxi.png';
ctx.drawImage(taxi, 400, 220);


peter = new Image();
peter.src = 'assets/spideyman.png';
ctx.drawImage(peter, 300, 20);


city = new Image();
city.src = 'assets/cityscapecartoon.jpeg';
ctx.drawImage(city, 0, 0);

    }}

 


//   class Crawler{
//     constructor(x, y, color, width, height,) { // creates the shrek character
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true

//         this.render = function() { 
//             ctx.fillStyle = this.color // change the color of the context(ctx)
//             ctx.fillRect(this.x, this.y, this.width, this.height) //creating a rectangle on x and y coordinates, with a width and height
//         }
//     }

// }

// let peter = new Crawler(100, 100, 'red', 35, 25);
// console.log(peter);
// peter.render();

// let taxi = new Crawler(150, 150, 'yellow', 70, 25);
// console.log(taxi);
// taxi.render();
