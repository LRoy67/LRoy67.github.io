// Puzzle Game
// Logan Roy
// November 4, 2025

// Global Varriables
// 0(black), 255(white)
let grid = [
  [255, 255, 255, 255, 255],
  [255, 255, 255, 255, 255],
  [255, 255, 255, 255, 255],
  [255, 255, 255, 255, 255],
  [255, 255, 255, 255, 255]
];
let rows = grid.length;
let cols = grid[0].length;
let squareSize = 60;



function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
  tree = int(random(1, 4));
  if(tree === 1){
    grid = [
      [0, 255, 0, 255, 0],
      [0, 255, 0, 255, 0],
      [0, 255, 0, 255, 0],
      [0, 255, 0, 255, 0],
      [0, 255, 0, 255, 0]
    ];
  }
  if(tree === 2){
    grid = [
      [0, 255, 0, 255, 0],
      [255, 0, 255, 255, 255],
      [255, 0, 255, 0, 255],
      [0, 255, 255, 255, 0],
      [255, 0, 255, 255, 0]
    ];
  }
  if(tree === 3){
    grid = [
      [255, 0, 255, 0, 255],
      [255, 0, 255, 255, 255],
      [255, 0, 0, 255, 0],
      [255, 0, 255, 255, 255],
      [0, 0, 255, 0, 255]
    ];
  }
  print("working here boss in randomStart")
}

function draw() {
  background(220);
  renderGrid();
  selection();
  print(getCurrentX(), getCurrentY());
  winner();
}

function winner(){
  let win = 0;
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      if(grid[y][x] === 255)
        win++
    }
  }
  print(win);
  if(win === (rows*cols)){
    textSize(50);
    fill(0)
    text("You Win!", width / 2 - 90, height / 2)
  }
}


function mousePressed(){
  let x = getCurrentX();
  let y = getCurrentY();
  flip(x, y);
  if(!keyIsDown(SHIFT)){
  if(x + 1 < cols) flip(x + 1, y);
  if(x - 1 >= 0) flip(x - 1, y);
  if(y - 1 >= 0) flip(x, y - 1);
  if(y + 1 < cols) flip(x, y + 1);
  }
  print("working here boss in mousePressed")
}

function selection(){
  let x = getCurrentX();
  let y = getCurrentY();
  fill(0, 255, 0, 80)
  square(x*squareSize, y*squareSize, squareSize);
  if(x + 1 <= cols) square((x + 1)*squareSize, y*squareSize, squareSize);
  if(x - 1 >= 0) square((x - 1)*squareSize, y*squareSize, squareSize);
  if(y - 1 >= 0) square(x*squareSize, (y - 1)*squareSize, squareSize);
  if(y + 1 <= cols) square(x*squareSize, (y + 1)*squareSize, squareSize);

  print("working here boss in selection")
}

function getCurrentX(){
  let constrainedX = constrain(mouseX, 0, width - 1);
  return floor(constrainedX / squareSize)
}

function getCurrentY(){
  let constrainedY = constrain(mouseY, 0, height - 1);
  return floor(constrainedY / squareSize)
}

function flip(x, y){
  if(grid[y][x] === 0)grid[y][x]=255;
  else grid[y][x]= 0;
}


function renderGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize)
    }
  }
}




