// Background managment.
let background1, background2, background3, background4, background5;
let celebrating,dead,falling, shooting, standing, walkingleft,walkingright;
let backgrounds = [];
let backgroundSelection = [];
let backgroundColour;
let playHealth = 100;
let spriteX;
let spriteY;
let isMovingLeft, isMovingRight, isJumping;
let isGrounded = false;
let initialY;
let jumpHeight = 70;
let jumpSpeed = 8;
let gravity = 2;
let movementSpeed = 7;



// Counters used to change between sprites, screens/gamestates, and locations

let state = "start";
let areaCounter = 0; // Does nothing in this version

// Loads all Images
function preload() {
  
  background1 = loadImage("assets/background1.png");
  background2 = loadImage("assets/background2.png");
  background3 = loadImage("assets/background3.png");
  background4 = loadImage("assets/background4.png");
  background5 = loadImage("assets/background5.png");
  standing = loadImage("assets/standing.png");

  
}
// function preloadDog() {
//   standing = loadImage("assets/standing.png");
//   image(standing, mouseX, mouseY,CENTER, CENTER);


  

// }

// Setup function runs once at the start of the program
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CORNER);
  frameRate(30);

  
  backgrounds = [background1, background2, background3, background4, background5];
  selectBackgrounds();
  backgroundColour = 0;
}

// Set to run 30 times a second
function draw() {
  if (state === "start") {
    startScreen();
  } 
  else if (state === "play") {
    clear();
    
    displayBackground();
    
    image(standing, mouseX, mouseY, 100, 100);
    
  }
  // /
 
}

// Create a start screen.
function startScreen() {
  push();
  background(backgroundColour);
  fill(255);
  textSize(35);
  text("Click To Start Game!", width / 2, height / 2, CENTER, CENTER);
  if (mouseIsPressed && state === "start") {
    state = "play";
  }
  pop();
}
function nextScreen() {
  if (spriteX > width + 10) {
    spriteX = 0;
    selectBackgrounds();
    areaCounter++;
  } 
  else if (spriteX < 0 - 25) {
    spriteX = width;
    selectBackgrounds();  
    areaCounter++;
  }
}




// Selects the background that will apper.
function selectBackgrounds() {
  backgroundSelection = [];
  // This loops however many times the height fits into the width rounded up. It then adds random numbers used to specify which backgrounds will be displayed and in what order. 
  for (let i = 0; i < Math.ceil(width / height); i++) {
    backgroundSelection.push(Math.floor(Math.random() * backgrounds.length)); 
  }
}

// Displays the bacground image
function displayBackground() {
  
  for (let i = 0; i < Math.ceil(width / height); i++) {
    image(backgrounds[backgroundSelection[i]], height / 2 + height * i, height/2, height, height);
  }
}


function displaySprite() {



}

// function winState() {
//   background(255);
//   fill(0);
//   textSize(85);
//   textAlign(CENTER, CENTER);
//   text("YOU WIN!", width/2, height/2);
// }

