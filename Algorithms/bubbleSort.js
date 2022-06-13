function bubbleSort(arr = []) {
  const array = [...arr];
  const n = array.length;
  let isSwapped = false;
  for (let i = 0; i < n - 1; i++) {
    // loop responsible for passing
    isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      //loop responssible for swapping
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }
    if (isSwapped === false) break;
  }
  return array;
}

let sampleArray = [19, 34, 32, 44, 55, 12];
let sortedArray = bubbleSort(sampleArray);
console.log(sortedArray);
