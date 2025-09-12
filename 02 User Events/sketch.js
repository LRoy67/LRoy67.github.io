// User Events + Day 1 Challange
// Logan Roy
// September 11, 2025

// Global Variables here...
let circleColor = false;
let currentColor = "white"
// decloration  initilization
let x;
let y = 300;
let tSize = 50; // for text font size

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  x = width/2
}

function draw() {
  background(220);
  challenge(); // coordinate system challange
  movement();
  rect(x, y, 60, 30);
  mouseReport();
}

function mouseReport(){
// inspect some of the built-ins(system variables)
// for working with the mouse

fill(0);
let src = mouseX + ", " + mouseY + ", " + mouseIsPressed + ", " + mouseButton;
textSize(tSize);
text(src, mouseX, mouseY);

}

function mousePressed(){
// function automatically called ONCE per mouse click
tSize = random(10, 80)
}

function movement(){
  // Check for keyboard  presses for each frame
  // and move the rectangle accordingly

  //if(keyCode === RIGHT_ARROW && keyIsPressed) x += 5
  //else if(keyCode === LEFT_ARROW && keyIsPressed) x -= 5

  if (keyIsDown(RIGHT_ARROW)) x += 5;
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;
}


function keyPressed(){
  // this is a special EVENT function
  //gets automatically called anytime a
  // keyboard button is pressed.

  if(keyCode === LEFT_ARROW) x = x - 10

  print("key was pressed")
  if(key === "g") currentColor = "green";
  else if(keyCode === CONTROL) currentColor = "aqua";
  circleColor = !circleColor;
}

function challenge(){
  // Draw 5 hollow circles, in 4 corners
  // and in the center 50px in diameter
noFill();

if (circleColor === true){ // circleColor ===
fill(currentColor)}


// 5 circles
circle(200, 200, 50)
circle(400, 0, 50)
circle(0, 400, 50)
circle(0, 0, 50)
circle(400, 400, 50)
}









