// Trafic Simulator
// Logan Roy
// October 20, 2025


// Global Variables
let westbound = [];
let eastbound = [];



function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 20; i++){
    westbound.push(new Car(2))
  }

  for (let m = 0; m < 20; m++) {
    eastbound.push(new Car(1))
  }
}

function draw() {
  background(124, 252, 0);
  drawRoad();

  for(let w of westbound){
  w.display();
  w.move();
  }

  for (let e of eastbound) {
    e.display();
    e.move();
  }
}



function drawRoad() {
  // draws the road for the cars
  fill(0, 0, 0);
  rect(0, 235, width, 250);

  fill(0, 0, 0);
  rect(0, 485, width, 250);

  // road markers for the road
  fill(255, 255, 0)

  for (let m = 10; m < width; m += width / 12) {
    rect(m, height / 2, 50, 25)
  }
}


class Car {
  // 1. Constructor
  constructor(side) {
    this.x = 0;
    this.y = random(500,660);
    this.y2 = random(250,400);
    this.speed = random(0,15);
    this.side = side;
    this.c = color(random(255), random(255), random(255));
    this.random = int(random(1, 3));
  }
  // 2. Class Methods
  carPicker(){
    if(this.side === 1){
      if(this.random === 1){
        this.car2()}
        if(this.random === 2){
          this.truck2();
        }
      }
    
    else if(this.side === 2){
      if(this.random === 1){
        this.car1()}
      if(this.random === 2){
        this.truck1();
      }
    }
  }

  speedUp(){

  }

  speedDown(){

  }

  changeColor(){
    random(1, 100);
    if(random === 67)
  }

  truck1(){
    // WESTBOUND TRUCK START
      // TRUCK BODY
      fill(this.c);
      rect(this.x, this.y2, 110, 70);
      // TRUCK BOX
      fill(0, 0, 0)
      rect(this.x + 4, this.y2 + 10, 40, 50)
      // WINDSHEILD
      fill(0, 0, 0)
      rect(this.x + 60, this.y2 + 2.5, 30, 65)
      // HEADLIGHT 1
      fill(255, 235, 0)
      rect(this.x + 95, this.y2 + 5, 10, 10)
      // HEADLIGHT 2
      fill(255, 235, 0)
      rect(this.x + 95, this.y2 + 55, 10, 10)
      // TRUCK END
  }
  
  
  truck2(){
    // EASTBOUND TRUCK START
      // TRUCK BODY
      fill(this.c);
      rect(this.x, this.y, 110, 70);
      // TRUCK BOX
      fill(0, 0, 0)
      rect(this.x + 63, this.y + 10, 40, 50)
      // WINDSHEILD
      fill(0, 0, 0)
      rect(this.x + 20, this.y + 2.5, 30, 65)
      // HEADLIGHT 1
      fill(255, 235, 0)
      rect(this.x + 5, this.y + 5, 10, 10)
      // HEADLIGHT 2
      fill(255, 235, 0)
      rect(this.x + 5, this.y + 55, 10, 10)
      // TRUCK END
  }
  
  
  car1(){
    // WESTBOUND SPORTS CAR START
      // REAR FENDER
      fill(this.c)
      circle(this.x, this.y2 + 30, 70)
      // FRONT FENDER
      fill(this.c)
      circle(this.x + 90, this.y2 + 30, 70)
      // CAR BODY
      noStroke();
      fill(this.c);
      rect(this.x, this.y2, 100, 60);
      // WINDSHEILD
      fill(0, 0, 0)
      rect(this.x + 60, this.y2 + 5, 30, 50)
      // REAR WINDSHEILD
      fill(0, 0, 0)
      rect(this.x + 5, this.y2 + 10, 30, 40)
      // HEADLIGHT 1
      fill(255, 235, 0)
      rect(this.x + 95, this.y2 + 5, 10, 10)
      // HEADLIGHT 2
      fill(255, 235, 0)
      rect(this.x + 95, this.y2 + 45, 10, 10)
      // WING
      fill(255, 255, 255)
      rect(this.x - 55, this.y2, 20, 60)
      // WING SUPPORT 1
      fill(255, 255, 255)
      rect(this.x - 50, this.y2 + 10, 30, 5)
      // WING SUPPORT 2
      fill(255, 255, 255)
      rect(this.x - 50, this.y2 + 45, 30, 5)
      // SPORTS CAR END
  
  }
  
  
  car2(){
   // EASTBOUND SPORTS CAR START
      // REAR FENDER
      fill(this.c)
      circle(this.x, this.y + 30, 70)
      // FRONT FENDER
      fill(this.c)
      circle(this.x + 90, this.y + 30, 70)
      // CAR BODY
      noStroke();
      fill(this.c);
      rect(this.x, this.y, 100, 60);
      // WINDSHEILD
      fill(0, 0, 0)
      rect(this.x, this.y + 5, 30, 50)
      // REAR WINDSHEILD
      fill(0, 0, 0)
      rect(this.x + 75, this.y + 10, 30, 40)
      // HEADLIGHT 1
      fill(255, 235, 0)
      rect(this.x - 15, this.y + 5, 10, 10)
      // HEADLIGHT 2
      fill(255, 235, 0)
      rect(this.x - 15, this.y + 45, 10, 10)
      // WING
      fill(255, 255, 255)
      rect(this.x + 125, this.y, 20, 60)
      // WING SUPPORT 1
      fill(255, 255, 255)
      rect(this.x + 110, this.y + 10, 30, 5)
      // WING SUPPORT 2
      fill(255, 255, 255)
      rect(this.x + 110, this.y + 45, 30, 5)
      // SPORTS CAR END
  }
  

  display() {
    this.carPicker();
  }

  move() {
    if (this.side === 1) {
      if (this.x < 0) {
        this.x = width;
      }
      else {
        this.x -= this.speed;
      }
    }
    else if (this.side === 2) {
      if (this.x > width) {
        this.x = 0;
      }
      else {
        this.x += this.speed;
      }
    }
  }
}
