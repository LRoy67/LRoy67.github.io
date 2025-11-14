// Image Manipulation Assignment Thing
// Logan Roy
// November 13, 2025

let chip;
let hand; 
let nuit;
let race;

// ////////////////
// // picture 1 //
// //////////////

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   loadAssets();
//   pixelDensity(1);
// }

// function draw() {
//   //image(chip, 0, 0)
//   //image(hand, 0, 0)
//   //image(nuit, 0, 0)
//   image(race, 0, 0)
//   loadPixels();
  
//   background(0);
//   //chipColor();

//   updatePixels();
// }

// async function loadAssets(){
//   chip = await loadImage("assets/chip.jpg");
//   // hand = await loadImage("assets/hand.jpg");
//   // nuit = await loadImage("assets/nuit.jpg");
//   // race = await loadImage("assets/race.jpg");
// }

// function setPixelOneD(pos, r, g, b){
//   // pos -> 1D location in pixels array
//   // r, g, b -> new colors for that pixel
//   pixels[pos] = r;
//   pixels[pos + 1] = g;
//   pixels[pos + 2] = b;
// }

// function setPixel(x, y, r, g, b){
//   // x, y -> pixel location
//   // r, g, b -> new pixel color
//   let index = (width*y + x) * 4;
//   setPixelOneD(index, r, g, b);
//  }

//  function chipColor(){
//   for(let i = 0; i < pixels.length; i += 4){
//     let r = pixels[i];
//     let g = pixels[i + 1];
//     let b = pixels[i + 2];
//     if((r > g && r > b) ||(r === g)){
//       setPixelOneD(i, 255, 0, 0);
//     }
//     else if((g > r && g > b) ||(g === b)){
//       setPixelOneD(i, 0, 255, 0);
//     }
//     else if(b > r && b > g){
//       setPixelOneD(i, 0, 0, 255);
//     }
//   }
//  }


// //////////////////
// //  picture 2  //
// ////////////////
// function setup() {
//   createCanvas(600, 600);
//   loadAssets();
//   pixelDensity(1);
// }

// function draw() {
//   //image(chip, 0, 0)
//   //image(hand, 0, 0)
//   //image(nuit, 0, 0)
//   image(race, 0, 0)
//   loadPixels();
  
//   //background(0);
//   raceSplit();
// }

// async function loadAssets(){
//   //chip = await loadImage("assets/chip.jpg");
//   // hand = await loadImage("assets/hand.jpg");
//   // nuit = await loadImage("assets/nuit.jpg");
//   race = await loadImage("assets/race.jpg");
// }

// // function setPixelOneD(pos, r, g, b){
// //   // pos -> 1D location in pixels array
// //   // r, g, b -> new colors for that pixel
// //   pixels[pos] = r;
// //   pixels[pos + 1] = g;
// //   pixels[pos + 2] = b;
// // }

// function setPixel(posR, r, g, b, a=255){
//   pixels[posR] = r;
//   pixels[posR + 1] = g;
//   pixels[posR + 2] = b;
//   pixels[posR + 3] = a;
//  }

//  function raceSplit(){
//   for(let x = 0; x < race.width; x++){
//     for(let y = 0; y < race.height; y++){
//       let loc = (x + y * race.width) * 4;

//       // let red = getRed(loc);
//       // let green = 0;
//       // let blue = getBlue(loc);
//       // setPixel(loc, red, green, blue);

//       let red = getRed(loc);
//       let green = 0;
//       let blue = getBlue(loc);
//       if(x > race.width/2){
//         setPixel(loc, red, green, blue)
//       }
//     }
//   }
//   updatePixels();
//  }

//  function getRed(posR){
//     return pixels[posR];
//  }

//  function getGreen(posR){
//   return pixels[posR + 1];
// }

// function getBlue(posR){
//   return pixels[posR + 2];
// }

// function getAlpha(posR){
//   return pixels[posR + 3];
// }

// //////////////////
// //  picture 3  //
// ////////////////
// function setup() {
//   createCanvas(600, 600);
//   loadAssets();
//   pixelDensity(1);
// }

// function draw() {
//   //image(chip, 0, 0)
//   //image(hand, 0, 0)
//   image(nuit, 0, 0)
//   //image(race, 0, 0)
//   loadPixels();
  
//   //background(0);
//   fiveColorize();
// }

// async function loadAssets(){
//   //chip = await loadImage("assets/chip.jpg");
//   // hand = await loadImage("assets/hand.jpg");
//    nuit = await loadImage("assets/nuit.jpg");
//   //race = await loadImage("assets/race.jpg");
// }

//  function setPixelOneD(pos, r, g, b){
//    // pos -> 1D location in pixels array
//    // r, g, b -> new colors for that pixel
//    pixels[pos] = r;
//    pixels[pos + 1] = g;
//    pixels[pos + 2] = b;
//  }

// function setPixel(x, y, r, g, b){
//   // x, y -> pixel location
//   // r, g, b -> new pixel color
//   let index = (width*y + x) * 4;
//   setPixelOneD(index, r, g, b);
//  }

//  function fiveColorize(){
//   let scaleAmount = 5;
//   for(let x = 0; x < width; x += scaleAmount){
//     for(let y = 0; y < height; y += scaleAmount){
//       let avg = getAvg(x, y, r, g, b);
//       if(avg > 205){
//         r = 170;
//         g = 230;
//         b = 220;
//         setPixel(x, y, r, g, b)
//       }
//       else if(avg > 155 && avg < 205){
//         r = 105;
//         g = 150;
//         b = 210;
//         setPixel(x, y, r, g, b)
//       }
//       else if(avg > 105 && avg < 155){
//         r = 120;
//         g = 180;
//         b = 60;
//         setPixel(x, y, r, g, b)
//       }
//       else if(avg > 55 && avg < 105){
//         r = 130;
//         g = 30;
//         b = 130;
//         setPixel(x, y, r, g, b)
//       }
//       else if(avg > 0 && avg < 54){
//         r = 90;
//         g = 10;
//         b = 50;
//         setPixel(x, y, r, g, b)
//       }
//     }
//   }
//  }

//  function getAvg(x, y){
//   // return the average intensity of pixel (x, y)
//   let i = (width*y + x) * 4;
//   let r = pixels[i];
//   let g = pixels[i + 1];
//   let b = pixels[i + 2];
//   return(r+g+b)/3
// }

//////////////////
//  picture 4  //
////////////////

function setup() {
  createCanvas(600, 600);
  loadAssets();
  pixelDensity(1);
}

function draw() {
  //image(chip, 0, 0)
  image(hand, 0, 0)
  //image(nuit, 0, 0)
  //image(race, 0, 0)
  loadPixels();
  
  //background(0);
  raceSplit();
}

async function loadAssets(){
  //chip = await loadImage("assets/chip.jpg");
  hand = await loadImage("assets/hand.jpg");
  // nuit = await loadImage("assets/nuit.jpg");
  //race = await loadImage("assets/race.jpg");
}

function setPixelOneD(pos, r, g, b){
  // pos -> 1D location in pixels array
  // r, g, b -> new colors for that pixel
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixel(posR, r, g, b, a=255){
  pixels[posR] = r;
  pixels[posR + 1] = g;
  pixels[posR + 2] = b;
  pixels[posR + 3] = a;
 }

 function raceSplit(){
  for(let x = 0; x < hand.width; x++){
    for(let y = 0; y < hand.height; y++){
      let loc = (x + y * hand.width) * 4;

      // let red = getRed(loc);
      // let green = 0;
      // let blue = getBlue(loc);
      // setPixel(loc, red, green, blue);

      let red = getRed(loc);
      let green = 0;
      let blue = getBlue(loc);
      if((x < hand.width/2)*4){
        if((y < hand.height/2)*4){
        setPixel(loc, red, green, blue);
        offset -= 8
      }}
    }
  }
  updatePixels();
 }

 function getRed(posR){
    return pixels[posR];
 }

  function getGreen(posR){
   return pixels[posR + 1];
 }

 function getBlue(posR){
   return pixels[posR + 2];
 }

 function getAlpha(posR){
   return pixels[posR + 3];
 }