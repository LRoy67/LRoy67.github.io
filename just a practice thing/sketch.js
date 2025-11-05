/*
2D Array Practice.
Complete the following tasks:

1. Create an empty array named numbers

2. Add the following 3 arrays (using push()) into numbers:
    [10,20,30]
    [5, 5, 5]
    [97, 98, 99]

3. Print out your 2D array

4. Add an extra 99 to the end of each interior array

5. Change the item a [0][2] to 300

6. Loop through each item in the 2D array.
    for any values that are greater than 90, reduce their value by 50

7. change all the values in the inner array at position 1 to 0
    - could look at using .fill()

*/

let numbers = [];

function setup() {
  //Put your work here...
  print(numbers);
  numbers.push([10, 20, 30],[5, 5, 5],[97, 98, 99]);
  
  for(let i = 0; i < 3; i++){
  numbers[i].push(99);
  }
  numbers[0][2] = 300;
  
  for(let y = 0; y < numbers.length; y++){
    for(let x = 0; x < numbers[y].length; x++){
      if(numbers[y][x] > 90) numbers[y][x] -= 50;
    }
  }

  numbers[1].fill(0);
}

