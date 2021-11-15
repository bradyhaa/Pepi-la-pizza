## Get Peter Parker safely passed all the killer cabs!
Inspired by a scene in Spider-Man 2 movie.:red_circle:�:large_blue_circle:�:white_circle:
Peter Parker must try and deliver as many pizzas through the crowded traffic laiden New York streets.
If he gets hit by an oncoming taxi-cab or runs out of time to deliver pizzas he will be fired from Joe's Pizzeria.
## How to Play?
> 1.  Go to [livesite](https://pepi-la-piza.github.io).
> 2.  Move and manipulate the Peter Parker character with the `W`, `A`, `S`, `D`  keys.
> 3.  Successfully dodging the oncoming taxi-cabs by switching lanes and or speeding up and slowing down.
> 4.  To win make it passed all the taxis before the game time runs out and you win!
> 5.  The game is over when you are hit by a taxi-cab or when the time runs out.
### SCREENSHOTS
(![image](https://user-images.githubusercontent.com/92765157/141695897-8c181ff7-7cb6-4fb2-90c1-7f6fe08ed4e6.png))
## Creating Player Code Snippet
```///////////  CLASS  PLAYERS/CHARACTERS ////////
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
```
## Creating Side Scrolling Background Image
```////////  SIDE SCROLL
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
```
## Thoughts and Reflections
-I had a very ahrd time trying to pick up the images within my canvas after side scrolling background was established but then found the order of functions and renderings to be the reason why. 
-I had a hard time getting the detecthit function to work but will be working on afterwards to complete game. 
-The hidden feature was incredibly new and useful! 
-I hope i can get down the universal clases and object declarations step before caling on functions that haved to do with them.
 -A big regret was not being able to set up another character for Peter to interact with since couldnt get the detecthit function to work trying to do another function asking something similar was not fruitful. 
 -There are many things aftert this project to learn but it was good to put many of the things learned to use in this project.
