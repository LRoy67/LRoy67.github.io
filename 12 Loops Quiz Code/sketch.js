// 12 Loops Quiz Code
// Logan Roy
// October 6, 2025

// global
let gridSize = 5;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function grid(){
  // draw a grid or something
  strokeWeight(3);
  let x = 0;
  while (x < width){
    let y = 0;
    x += gridSize;
    while (y<height){
     if(abs(width/2) > 100){
      point(x,y);
     }
      y += gridSize;
    }
  }
}



function draw() {
  background(220);
  grid();
}
