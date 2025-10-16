// Create First Class
// Logan Roy
// October 14, 2025


// Global Variables
let ball1;
let ball2;
let ball3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new RoundRacer(5,200);
  ball2 = new RoundRacer(15,500);
  ball3 = new RoundRacer(25,800);
}

function draw() {
  background(220);
  ball1.move();
  ball1.display();
  ball2.move();
  ball2.display();
  ball3.move();
  ball3.display();
}


class RoundRacer {
  constructor(speed, y){
    this.speed = speed;
    this.x = 0;
    this.y = y;
    this.color = color(random(255),random(255),random(255));
  }

  display(){
    fill(this.color)
    circle(this.x, this.y, 30)
  }

  move(){
    this.x += this.speed;
    if(this.x > width) this.x = 0;
  }
}

