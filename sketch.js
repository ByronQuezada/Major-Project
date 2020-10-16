// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let startButton;
let running;
let isMouseBeingUsed;
let player;
//Button Variables

let gameStarted = false;
let isGrounded;
let isJumping;
let gravity;
let spriteX;
let spriteY;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(running, mouseX, mouseY);
  
}

function preload() {
  running = loadImage("assets/running.png");

  
}

// Applies gravity and checks if you are on the ground
function applyGravity() {
  // Ground Detection
  isGrounded = collideLineRect(0 - 30, height * 0.63, width + 30, height * 0.63, spriteX, spriteY);
  
  if (!isGrounded && !isJumping) {
    spriteY += gravity;
  }

}

// function startGame() {
//   startButton.hide();
//   noCursor();
//   isMouseBeingUsed = true;
//   gameStarted = true;

// }
// //Ending game and displaying try again button
// function endGame() {
//   gameStarted = false;
//   background("black");
//   fill(255);
//   text("GAME OVER", width / 2, height /2);
//   cursor();
  
 
// }
// //Displaying start button
// startButton = createButton("Start Game");
// startButton.position(width / 2 - width / 4 / 2, height / 2 - height / 8 / 2);
// startButton.size(width /4, height / 8);
// startButton.mousePressed(startGame);