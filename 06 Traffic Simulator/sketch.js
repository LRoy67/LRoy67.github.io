// Trafic Simulator
// Logan Roy
// October 20, 2025


// Global Variables
let car1;
let westbound = [];
let eastbound = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(124,252,0);
  car1.display();
  drawRoad();
}



function drawRoad(){
  // draws the road for the cars
  fill(0, 0, 0);
  rect(0, 235, width, 250);

  fill(0, 0, 0);
  rect(0, 485, width, 250);

  // road markers for the road
  fill(255, 255, 0)

  for(let m = 10; m < width; m += width/12){
    rect(m, height/2, 50, 25)
  }
}


class Car{
  constructor(){
    this.x = x; 
    this.y = y; 
    this.speed = random(0,15);
    //this.direction = 
    this.c = color(random(255),random(255),random(255))
  }

  display(){
    fill(this.c);
    rect(0, 485, 50, 80);
  }

  move(){
    this.x += this.speed;
    if(this.x > width) this.x = 0;
  }
}





