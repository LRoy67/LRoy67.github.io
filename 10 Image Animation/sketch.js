// Image Animation
// Logan Roy
// October 2, 2025

// Global Varriables
let pinImages = []; // Array === List
let current = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  print("done loading");
}

async function loadAssets(){
// load all of our pin wheel images
  for (let i = 0; i < 9; i++){
  pinImages.push(await loadImage("assets/pin-0"+i+".png"))
 }
}


function draw() { // This is a loop
  background(0);
  //animatewithFor();
  
  // manage current image display
  

  if (frameCount % 10 === 0) {
    current += 1;
    if(current > 8) current = 0;
  }

  image(pinImages[current], width/2, height*0.6);
}// Screen is updated here!


function animatewithFor(){
  //try and make an animation with for loops
  // -- doesn't work!
  //FOR loop yields a SINGLE IMAGE
  for(i = 0; i < 9; i++){
    image(pinImages[i], width/2, height*0.7);
  }
}
