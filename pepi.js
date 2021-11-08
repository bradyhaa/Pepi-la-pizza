let game = document.querySelector('#game');
let movementDisplay = document.querySelector('#movement');
let shrek;
let donkey;
let ctx = game.getContext('2d');

ctx.fillStyle = 'white';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;

function load() {
    loadImage("background2.png", "background");
    loadImage("vgForegroundGrass1.png", "foreground");
    loadImage("bee1.png", "bee");
    loadImage("flower1.png", "flower1");
    loadImage("flower1polinated.png", "flower1pollinated");
    loadImage("wasp.png", "wasp");
    loadImage("deadBee.png", "deadBee");
    loadImage("mountains.png", "mountains");
}
























































































function render() {
    // MUST RENDER IN ORDER OF LAYERS
    renderScene(mtnOffset, "mountains");
    renderScene(bgXOffset, "background");
    renderFlower();
    renderBee();
    renderWasp();
    renderScene(foregroundXOffset, "foreground");
    renderScore();
}



function gameOver() {
    //Get Game-Over Modal and reinstate the button!
    let GOModal = document.getElementById("GO-modal");
    GOModal.classList.remove("hidden");
    document.getElementById("start").classList.remove("hidden");
    // Store the Score
    storeScore();
    // Game Change
    gameState.mode = "Game Over";
}