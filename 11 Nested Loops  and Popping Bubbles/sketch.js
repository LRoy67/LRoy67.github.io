// Nested Loops and Popping Bubbles
// Logan Roy
// October 3, 2025

let bubbles = [];
let bubbleSize = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
  //drawwithGrid();
}

function draw() {
  background(220);
  showBubbles();
}



function populateArray(){
  // use a nested loop to generate x,y positions for
  // all of our bubbles.
  for(let x =0; x < width; x += bubbleSize){
    for(let y = 0; y < height; y += bubbleSize){
      let b = {
        x: x, y: y
      };
      bubbles.push(b);
    }
  }
}



function showBubbles(){
  // traverse the array, and display a bubble at
  // each (x,y)
  for(let i = 0; i < bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize)
    //Point - incircle distance check (pop):
    if(dist(b.x, b.y, mouseX, mouseY) < bubbleSize){
      // to delete an item: use .splice()
      // .splice(pos, #OfItemsToDel, [replacementItem])
      bubbles.splice(i,1);
    }
  }
}





// function drawwithGrid(){
//   for(let x = 0; x <= width; x += 30){
//     // x = 0, 30, 60
//       for(let y = 0; y <= height; y += 30 ){
//         // y = 0, 30, 60
//         circle(x, y, 20)
//     }
//   }
// }


