// 19 Inheritance and Code in Multiple Files
// Logan Roy
// October 30, 2025


// Global Varriables
let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObj(random(width), random(height)));
    objects.push(new LineObj());
    //objects.push(new AnimatedObject(random(width), random(height)));
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}


// Child Class 1 - Circle
class CircleObj extends AnimatedObject{
  constructor(x, y){
    super(x, y);
    // we can also add on to what was in the parent class
    this.size = random (20, 40);
  }
  // no mention of move()... wil be the same as parent class
  display(){// function override; copies overtop of parent version
    if(dist(this.x, this.y, mouseX, mouseY)< this.size/2){
      fill(0, 255, 0);
    }
    else fill(255);

    circle(this.x, this.y, this.size);
  }
}

// Child Class 2 - Line
class LineObj extends AnimatedObject{
  constructor(){
    super(random(width), random(height));
  }
  
  move(){ // combo override, but built on parent version
    super.move(); // runs the parent version move()
    this.x -= 5;
    if(this.x < 0)this.x = width;
  }

  display(){// full override (no reference to parent version)
    if(mouseIsPressed){
      strokeWeight(12);
    }
    else strokeWeight(2);

    line(this.x, this.y, this.x + 15, this.y);
  }
}




