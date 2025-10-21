// Planets and Moons
// Logan Roy
// October 17, 2025


// Global Variables
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  fill(0,0,70,60)
  rect(0,0,width,height);
  myPlanet.display();
}

function mousePressed(){
  //regular click = add a moon
  // shift click = destroy and reset a moon

  if(keyIsPressed && keyCode ===SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
    background(0, 0, 70);
  }
}


class Planet{
  // 1. Constructor
  constructor(x, y){
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }

  // 2. Class methods
  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }

  display(){
    // draw the planet and all of it's moons
    // planet
    fill(249, 215, 28);
    circle(this.x, this.y, this.s);

    // moons
    for(let m of this.moons){
      m.update(this.x, this.y);
    }
  }
}

class Moon{
  // 1. Constructor
  constructor(x, y){
    this.x = x; this.y = y; this.speed = random(1,5);
    this.angle = 0; this.orbitRadius = random(80,250);
    this.s = random(5,50); this.c = color(random(255),random(255),random(255))
  }

// 2. Class methods
  display(x, y){
    push();
    translate(x,y);
    rotate(this.angle);
    noStroke();
    fill(this.c);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  move(){
    this.angle += this.speed;
  }

  update(x, y){
    // helper function to handle calling the class methods internally
    this.move();
    this.display(x, y);
  }
}