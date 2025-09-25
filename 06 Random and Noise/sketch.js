//random() and noise()
// Logan Roy
// September 24, 2025


//global varriables

let x1, y1, x2, y2;
let d1, d2;
let noiseTime = 5, noiseSpeed = 0.01;
// Noisespeed controls how connected
// our random noise() values are
let minSize = 1; let maxSize = 200;

let mX, mY; // move x and y

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3; y1 = height*0.5;
  x2 = width*0.7; y2 = height*0.5;
  mY = height*0.3;
  //frameRate(10);
}

function draw() {
  background(220);
  randomCircle();
  noiseCircle();
  noiseMove();
}

function noiseMove(){
  // use random noise to set the position of the third circle
  fill(200, 30, 69)
  mX = noise(noiseTime);
  mX = map(mX, 0, 1, minSize, maxSize)
  circle(mX, mY, 50);

}


function noiseCircle(){
  // draw a fixed circle with randomly changing
  // yet smooth diameters

  d2 = noise(noiseTime); // yields value between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize)
  fill(255, 0, 100)
  circle(x2, y2, d2)
  noiseTime += noiseSpeed
}


function randomCircle(){
  // draw a fixed circle with randomly changing diameter
  fill(50, 150, 250);
  d1 = random(minSize, maxSize)
  circle(x1, y1, d1)
}






