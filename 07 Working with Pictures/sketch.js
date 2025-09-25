// Working with Images
// Logan Roy
// September 25, 2025


let lionL, lionR;
let facingRight = false;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  imageMode(CENTER);
}

async function loadAssets(){
  // handle loading all images here
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");



}


function draw() {
  background(220);
  
// update our direction
if(pmouseX < mouseX){
  facingRight = true;
}
else if(pmouseX > mouseX){
  facingRight = false;
}

// update our drawings
  if(facingRight){
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }

  else{
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
}
