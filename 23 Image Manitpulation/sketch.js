// Image Manipulation
// Logan Roy
// November 12, 2025
// working with images, translation between 2D and 1D indices
let pilot;

function setup() {
  createCanvas(891, 892);// feels bad
  loadAssets();
  pixelDensity(1);
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

function draw() {
  image(pilot, 0, 0)
  loadPixels(); // fills the "canvas" pixel array
  
  // run a filter to modify the pixel array
  boost();


  updatePixels();
}

function boost(){
  // brightening filter
  let boost = map(mouseX, 0, width, -100, 100)
  for(let i = 0; i < pixels.length; i += 4){
    let r = pixels[i] + boost;
    let g = pixels[i + 1] + boost;
    let b = pixels[i + 2] + boost;
    setPixelOneD(i, r, g, b);
  }

}

async function loadAssets(){
  pilot = await loadImage("assets/aviator.png");
}



