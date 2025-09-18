// Interactive Scene
// Logan Roy
// September 16, 2025


// Global Variables
let currentColor = "#86D0E8"
let rectColor =  "Cyan"

function setup() {
  createCanvas(950, 930);
}

function draw() {
  background(0, 0, 255);
  drawBuildings();
  drawWindows();
  windowColor();
  drawMoon();
}

function drawBuildings(){
  // Draws the buildings in the scene
  
  // First building
  fill(0, 0, 0)
  rect(0, 100, 175, 830)

  // Second Building
  fill(0, 0, 0)
  rect(200, 200, 175, 750)

  // Thrid Building
  fill(0, 0, 0)
  rect(400, 250, 175, 750)

  // Fourth Building
  fill(0, 0, 0)
  rect(600, 155, 175, 780)

  // Five Building
  fill(0, 0, 0)
  rect(800, 325, 150, 700)
  
}

function drawWindows(){
  // Draws the windows on the buildings in the scene
  fill(0, 255, 255)
  if (rectColor === true){ // circleColor ===
    fill(currentColor)}
  
  print("key was pressed")
  if(key === "g") currentColor = "Lime";
  if(key === "h") currentColor = "Yellow";
  if(key === "j") currentColor = "Cyan";
  if(key === "k") currentColor = "DeepPink";
  rectColor = !rectColor;

  //Building one
  for(let wy = 130; wy <= height; wy += 175/3){
    rect(10, wy, 75, 50)
  }
  
  for(let wy = 130; wy <= height; wy += 175/3){
    rect(90, wy, 75, 50)
  }

  //Building two
  for(let wy = 235; wy <= height; wy += 175/3){
    rect(220, wy, 65, 50)
  }for(let wy = 235; wy <= height; wy += 175/3){
    rect(290, wy, 65, 50)
  }

  //Building three
  for(let wy = 290; wy <= height; wy += 175/3){
    rect(420, wy, 65, 50)
  }for(let wy = 290; wy <= height; wy += 175/3){
    rect(490, wy, 65, 50)
  }

  //Building four
  for(let wy = 180; wy <= height; wy += 175/3){
    rect(620, wy, 65, 50)
  }for(let wy = 180; wy <= height; wy += 175/3){
    rect(690, wy, 65, 50)
  }

  //Building five
  for(let wy = 350; wy <= height; wy += 175/3){
    rect(820, wy, 55, 50)
  }for(let wy = 350; wy <= height; wy += 175/3){
    rect(880, wy, 55, 50)
  }

}
  
function windowColor(){
// Changes the color of the windows on the buildings
print("key was pressed")
if(key === "g") currentColor = "Lime";
if(key === "h") currentColor = "Yellow";
if(key === "k") currentColor = "DeepPink";
  else if(keyCode === CONTROL) currentColor = "Cyan";
  rectColor = !rectColor;

}

function drawMoon(){
// Draws the moon in the background
fill(255, 255, 255);
circle(mouseX, mouseY, 100);

fill(0, 0, 0)
rect(mouseX - 10, mouseY - 5, 35, 5)

fill(0, 0, 0)
rect(mouseX - 17, mouseY + 30, 35, 5)

fill(0, 0, 0)
rect(mouseX - 50, mouseY - 5, 35, 5)

fill(0, 0, 0)
rect(mouseX + 15, mouseY - 5, 35, 5)

fill(0,0,0)
square(mouseX + 5, mouseY - 10, 30, 0, 0, 90, 90)

fill(0,0,0)
square(mouseX - 35, mouseY - 10, 30, 0, 0, 90, 90)


}










