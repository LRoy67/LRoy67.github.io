// Classes and Objects (Books)
// Logan Roy
// October 15, 2025


// Global variables
let myBook;         // for testing one
let bookshelf = []; // for testing many



function setup() {
  createCanvas(windowWidth, windowHeight);
  // create single book
  //myBook = new Book("CS30 text", "Mr.Scott", 69420672191167, 
  //"leather bound", 420, width*0.3)

  bookshelf = [bambi, science, tester, ]
  // loop for multi
  for(let book = 0; book <= 20;){
    
  }
}

function draw() {
  background(220);
  myBook.display();
}


class Book{
// 1. Constructor
  constructor(title, author, isbn, cover, pages, x){
  this.x = x;
  this.author = author;
  this.title = title;
  this.isbn = isbn;
  this.pages = pages;
  this.cover = cover;
  this.pickedUp = false;

  // fields for pickups...
  this.left; this.right; this.top, this.bottom;
  this.updateSides();
  }

// 2. class methods
  updateSides(){
    this.top = height/2 - 75;
    this.bottom = height/2 + 75;
    this.left = this.x - this.pages/20;
    this.right = this.x + this.pages/20;
  }

  mouseIsOver(){
    //return whether the mouse is hovering or not
    if(mouseX > this.left && mouseX < this.right){
      if(mouseY < this.bottom && mouseY > this.top){
        return(true);
      }
    }
  }


  display(){
    this.updateSides();
    // render our book object in the canvas
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(20);

    // set fill color based on cover type
    switch(this.cover){
      case "softcover":
        fill(250, 200, 150); break;
      case "hardcover":
        fill(120, 100, 80); break;
      case "leather bound":
        fill(67, 25, 41); break;  
    }

    // now draw the book elements
    push();
    translate(this.x, height/2);
    if(this.mouseIsOver()){
      scale(1.1);
    }
    rect(0, 0, this.pages/10, 150);
    fill(255);
    text(this.title[0], 0, -50);
    pop();
  }
}


