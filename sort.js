naive bubblesort implementation
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        const tempI = arr[i];
        const tempJ = arr[j];
        arr[i] = tempJ;
        arr[j] = tempI;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([1, 2, 3, 5, 7, 4]));
console.log(bubbleSort([1, 2, 3, 5, 7, 4, 22, 15, 17, 98, 40, 16]));
