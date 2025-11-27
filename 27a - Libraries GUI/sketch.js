// Libraries GUI
// Logan Roy
// November 27, 2025

let gui;
let s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  s = createSlider("diameter", width/2, height*0.6, 128, 32, 40, 200 )
}

function draw() {
  background(220);
  drawGui();
  circle(width/2, height/2, s.val)
}
