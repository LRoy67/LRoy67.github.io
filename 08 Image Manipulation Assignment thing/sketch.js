// Image Manipulation Assignment Thing
// Logan Roy
// November 13, 2025

let chip;
let hand; 
let nuit;
let race;


function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  pixelDensity(1);
}

function draw() {
  //image(chip, 0, 0)
  image(hand, 0, 0)
  //image(nuit, 0, 0)
  //image(race, 0, 0)
  loadPixels();
  
  background(0);
  //chipColor();

  updatePixels();
}

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
  // hand = await loadImage("assets/hand.jpg");
  // nuit = await loadImage("assets/nuit.jpg");
  // race = await loadImage("assets/race.jpg");
}

function setPixelOneD(pos, r, g, b){
  // pos -> 1D location in pixels array
  // r, g, b -> new colors for that pixel
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixel(x, y, r, g, b){
  // x, y -> pixel location
  // r, g, b -> new pixel color
  let index = (width*y + x) * 4;
  setPixelOneD(index, r, g, b);
 }

 // picture 1
 function chipColor(){
  for(let i = 0; i < pixels.length; i += 4){
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];
    if((r > g && r > b) ||(r === g)){
      setPixelOneD(i, 255, 0, 0);
    }
    else if((g > r && g > b) ||(g === b)){
      setPixelOneD(i, 0, 255, 0);
    }
    else if(b > r && b > g){
      setPixelOneD(i, 0, 0, 255);
    }
  }
 }