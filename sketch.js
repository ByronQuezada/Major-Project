// Background managment.
let background1, background2, background3, background4, background5;
let running;
let backgrounds = [];
let backgroundSelection = [];
let backgroundColour;



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
  running = loadImage("assets/running.png");

  
}

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
  image(running, mouseX, mouseY);
  if (state === "start") {
    startScreen();
  } 
  else if (state === "play") {
    clear();
    
    displayBackground();
    
    
  }
 
}

// Makes a start screen
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



// Selects which backgounds will be shown
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

