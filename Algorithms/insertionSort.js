//Creating insertion sort algorithm
function insertionSort(arr = []) {
  const array = [...arr];
  let n = array.length;
  //loop through the unsorted array starting from index 1 to index n - 1
  for (let i = 1; i < n; i++) {
    //temp variable stores the variable to be sorted
    let temp = array[i];
    //index j of the sorted array equal i - 1. i.e sorted array increases in size as unsorted array decreases in size
    let j = i - 1;
    //loop through the sorted array
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      //Do the comparism in the sorted array backwards with temp value
      j--;
    }
    //if space for temp has beeb found in the sorted array temp is greater than element, then set the next element on the
    //unsorted array to temp i.e a[j + 1] = temp; or a[i] = temp
    array[j + 1] = temp;
  }
  return array;
}


let sampleArray = [19, 34, 32, 44, 55, 12];
let sortedArray = insertionSort(sampleArray);
console.log(sortedArray);
