// User Events + Day 1 Challange
// Logan Roy
// September 11, 2025

// Global Variables here...
let circleColor = false;
// decloration  initilization


function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(220);
  challange(); // coordinate system challange
}


function keyPressed(){
  // this is a special EVENT function
  //gets automatically called anytime a
  // keyboard button is pressed.

  print("key was pressed")
  circleColor = !circleColor;
}

function challange(){
  // Draw 5 hollow circles, in 4 corners
  // and in the center 50px in diameter
noFill();

if (circleColor === true){ // circleColor ===
fill(255, 0, 0)}


// 5 circles
circle(200, 200, 50)
circle(400, 0, 50)
circle(0, 400, 50)
circle(0, 0, 50)
circle(400, 400, 50)
}