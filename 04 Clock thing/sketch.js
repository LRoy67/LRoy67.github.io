// Project Title
// Your Name
// Date



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  // Clock's base first
  push();
  translate(width/2, height/2);
  circle(0, 0, 500);
  point(0,0);

  // Little clock decoration
   let timeLines = 40
   let angle = 160/timeLines;
   for (let i = 0; i < timeLines; i++){
     line(10, 10, 25, 0);
     rotate(20);
   }

    // Little clock decoration
    let timeLinestwo = 40
    let angle2 = 160/timeLinestwo;
    for (let i = 0; i < timeLinestwo; i++){
      strokeWeight(5);
      line(0, 40, 0, 40);
      rotate(20);
    }
  pop();
  clockMinuteMarkers();
  clockHourMarkers();
}

function clockHourMarkers(){
  // Clock's hour time markers
  push();
  strokeWeight(5);
  translate(width/2, height/2);
  let hourMarkers = 40
  let angle = 480/hourMarkers;
  for (let i = 0; i < hourMarkers; i++){
    rotate(22.5);
    line(0, 165, 0, 235);
 
  }
  pop();
}

function clockMinuteMarkers(){
  // Clock's minute time markers
  push();
  strokeWeight(1);
  translate(width/2, height/2);
  let minuteMarkers = 40
  let angle = 160/minuteMarkers;
  for (let i = 0; i < minuteMarkers; i++){
    line(0, 185, 0, 235);
    rotate(90);
  }
  pop();
}

