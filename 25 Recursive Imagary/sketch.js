// Recursive images
// Logan Roy
// November 25, 2025



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER);
  noFill();
  background(160, 32, 240);
  //stroke(67, 67, 67);
  centerSquare(width/2, height/2, width/2);
  circleFractal(width/2, height/2, width/2);
  centerCircle(width/2, height/2, width);
}

function circleFractal(x, y, d){
  // this better be good
  if(d > 2){
    stroke(89, 67, 67);
    circle(x, y, d);
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y - d/2, d/2);
    circleFractal(x, y + d/2, d/2);
  }
  // base case is implied
}

function centerCircle(x, y, d){
  // recursively draw concentric circles
  // Base case
  if(d > 10){
    //recursive case
    stroke(255);
    circle(x, y, d);
    centerCircle(x, y, d*0.50);
  }

  // if we skip the recursive case, we
  // unravel one level ... base case
}

function centerSquare(x, y, s){
  if(s > 10){
    stroke(255, 0, 0);
    push();
    translate(x, y);
    rotate(radians(frameCount));
    square(0, 0, s)
    pop();
    centerSquare(x-s/2, y-s/2, s*0.50)
    centerSquare(x-s/2, y+s/2, s*0.50)
    centerSquare(x+s/2, y-s/2, s*0.50)
    centerSquare(x+s/2, y+s/2, s*0.50)
  }

}