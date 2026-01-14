// Final Review
// Logan Roy
// January 13, 2026

// global varriables
let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

// gorrila related
let idleIndex = 0;
let swipeIswipe = 0;
let gorillaState = 0; // 0 - idle, 1 - swipe
let gorillaX = 200;

// spiral related
let spiralObjects = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();

}

async function loadAssets(){
  for(let i = 0; i <= 15; i++){
    if(i<10){
      spiralImages.push(loadImage("assets/Circle/circle0"+i+".png"));
    }
    else{
      spiralImages.push(loadImage("assets/Circle/circle"+i+".png"));
    }
  }
  // gorrilas next
  for(let i = 1; i <= 6; i++){
    gorillaIdle.push(loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe"+i+".png"));
  }
}

function drawGorilla(){
  // render gorilla at it's position, chosing
  // the correct image for animation
  if(gorillaState === 0){// idle
    image(gorillaIdle[idleIndex], gorillaX, height/2);
    if(frameCount % 8 === 0){
      idleIndex++;
      if(idleIndex > 5){
        idleIndex = 0;
      }
    }
  }
  else if(gorillaState === 1){// swipe
    image(gorillaSwipe[swipeIndex], gorillaX, height/2);
    if(frameCount % 8 === 0){
      swipeIndex++;
      if(swipeIndex > 5){
        swipeIndex = 0;
      }
    }
  }
}

function keyPressed(){
  // triggers automatically once per key pressed event
  if(key === " "){
    if(gorillaState === 0) gorillaState === 1;
    else gorillaState = 0;
    print("switch")
  }
}

function moveGorilla(){
  // check for keypress ONCE PER FRAME
  // is better for a continous detection...
  if(keyIsDown(77)){
    if(mouseX < gorillaX)gorillaX -= 5;
    else gorillaX +=5;
  }
}


function draw() {
  background(0);
  moveGorilla();
  drawGorilla();
  spiralObjects.push(new Spiral(mouseX, mouseY))

  for(let i = 0; i < spiralObjects; i++){
    let s = spiralObjects[i];
    s.display();
    if(s.active === false){
      spiralObjects.splice(i,1);
    }
  }

  // for(let s of spiralObjects){
  //   s.display();
  // }
}

function mousePressed(){
  // trigers automatically, once per click
  spiralObjects.push(new Spiral(mouseX, mouseY))
}

class Spiral{
  constructor(x,y){
    this.x = x; this.y = y;
    this.currentFrame = 0;
    this.active = true; // to mark for removal
  }

  display(){// 0 - 15
    if(this.currentFrame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.currentFrame], this.x, this.y);
      if(frameCount % 3 === 0)this.currentFrame++;
    }
  }
}