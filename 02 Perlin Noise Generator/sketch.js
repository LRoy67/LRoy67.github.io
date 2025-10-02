// Perlin Noise Generator
// Logan Roy
// September 29, 2025


let rectWidth = 5;
let noise1;
let noiseoff = 0.1;
let timeoff = 1;
let ytop;
let xtop = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //generateTerrain();
  noise1 = random(100);
 
}



function generateTerrain(){
  ytop = height;
   rectMode(CORNERS);
   let kx1 = 1, kx2;
   for(let x = 0; x < width; x += rectWidth){
   // Generates a random height for the rectangle
  kx1 = noise(noise1)
  kx2 = map(kx1, 0, 1, 5, height)

   let x2 = x + rectWidth;

   fill(255,210,20)
   rect(x, height, x2, kx2);
   noise1 += noiseoff;

   print(kx2 + "   " + ytop)

   if(kx2 <= ytop){
    print("hi");
    ytop = kx2;
    xtop = x;
   }
 }
  drawFlag(xtop, ytop);
  print(xtop + "   " +ytop);
  rectMode(CORNER); // return to default
}



function widthControl(){
  // Changes the width of the rectangles
  if(keyIsDown (RIGHT_ARROW)) 
    {rectWidth += 3}
  else if (keyIsDown (LEFT_ARROW)){
    if(rectWidth > 5)
      {rectWidth -= 3}
  }
}

function drawFlag(x, y2){
  // draws the flag
  fill(255,0, 20)
  line(x, y2, x, y2 - 40)
  triangle(x, y2 - 60, x, y2 - 40, x + 5, y2 - 50)
}




function draw() {
  noise1 = timeoff;
  background(255);
  generateTerrain();
  widthControl();
  timeoff += 0.1;
}





