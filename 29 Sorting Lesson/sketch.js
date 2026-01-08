// Sorting lesson
// Logan Roy
// January 7th, 2026

let values = [];
const ARRAY_SIZE = 20;

function setup() {
  noCanvas();
  populateArray();
  print(values);
  //selectionSort();
  bubbleSort();
  print(values);

}

function selectionSort(){
  // for each index, find the smallest remaining value on the right
  // and swap if smaller than item at the index

  for(let i = 0; i< values.length - 1; i++){
    let minimum = values[i];
    let minimumIndex = i;

    for(let search = i + 1; search < values.length; search++){
      let cur = values[search]
      if(cur < minimum){
        minimum = cur;
        minimumIndex = search;
      }
    }
    let temp = values[i];
    values[i] = values[minimumIndex];
    values[minimumIndex] = temp;
  }
}

function populateArray() {
  // using a loop fill our array randomly
  for(let i = 0; i< ARRAY_SIZE; i++){
    values.push(floor(random(1000)));//0-999
  }
}

function bubbleSort(){
  for(i = 0; i < values.length - 1; i++){
    for(k = 0; k < values.length; k++){
      if(values[k + 1] < values[k]){
        let cur = values[k];
        values[k] = values[k + 1];
        values[k + 1] = cur;
      }
    }
  }
}
