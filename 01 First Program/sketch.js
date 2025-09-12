// Coordinate Systems and User Events
// Logan
// September 10th, 2025
// A first look at interactive progams with ps.j5

function setup() { // runs ONCE on start
  createCanvas(windowWidth, windowHeight);
  print(windowWidth, windowHeight, width, height)
}

function draw() {// runs OVER and OVER
  // targeting 60 fps
  // Strive to keep draw() clean and tidy
  background(220); // draws a big solid rectangle
  // 0 - black   255 - white
  drawTwoCircles();
}


function drawTwoCircles(){//[ALT][SHIFT][F]
  // Draws 2 circle one at a fixed location 
  // and one at the mouse location

// Draw Order:
// Later a thing is "drawn"(further down is draw())
// the higher it is in the draw stack



  fill(123, 98, 255);// colors are a bit like
                    // picking up a marker or...
                    // using a paintbrush with paint
  // R G B
  circle(mouseX, mouseY, 100);

  fill(255, 0, 0);
  circle(width/2, height/2)
}