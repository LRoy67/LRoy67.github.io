// State Variables and Real Time
// Logan Roy
// September 18, 2025

// Global Variables
let shapeState = 0; // 0 - Circle, 1 - Square, 2 - Triangle, 3 - Transition
let startTime, elapsedTime;



function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function draw() {
  // targetting 60 fps
  // using this tim eis sketchy, b/c no gurantee we can
  // achive the target framerate
  background(220);
  drawShape();
  // print("frame: " + frameCount)
  manageTimer();
if (shapeState === 3 && elapsedTime > 2000){
  shapeState = 0;
}
}

function manageTimer(){
  // print(millis());
  elapsedTime = millis();
  text((elapsedTime/1000).toFixed(2), width*0.3, height*0.75);
}


function keyPressed(){
  //automatically called on any keyboard button press
  // state var: 0 -> 1 , 1 -> 2 
  // 2 -> 3 (for 2 seconds) -> 0
  if(shapeState < 3){
    shapeState ++;
    if(shapeState){
      startTime = millis();

    }
  }
}


function drawShape(){
  // Inspect our state variable, and draw 1 of 4 possible
  // options, depending on the current variable
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150);
      break;
    
    case 1:
      square(width/2, height/2, 150);
      break;

    case 2:
      let x = width/2; let y = height/2;
      triangle(x-50, y+50, x+50, y+50, x, y-25)
      break;

    case 3:
      for(let i = 0; i < 20; i++){
        let x = random(width*0.4, width*0.6);
        let y = random(height*0.4, height*0.6);
        line (x, y, x+25, y);
      }
  }
}







