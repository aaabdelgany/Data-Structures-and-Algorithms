//naive bubblesort implementation
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const tempI = arr[i];
        const tempJ = arr[j];
        arr[i] = tempJ;
        arr[j] = tempI;
        console.log(arr, i, j);
      }
    }
  }
  return arr;
};

// console.log(bubbleSort([1, 2, 3, 5, 7, 4]));
// console.log(bubbleSort([48, 78, 1, 2, 3, 5, 7, 4, 22, 15, 17, 98, 40, 16]));

//slightly better, less comparisons since we're starting from the end. Also adds a break to stop comparisons once
//we are all set. this would mean the best case time is linear(only if the data is almost fully sorted). IF it isnt nearly sorted
//its quadratic time
const betterBubble = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tempJ = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempJ;
        noSwaps = false;
      }
    }
    console.log('one pass done');
    if (noSwaps) {
      break;
    }
  }
  return arr;
};
console.log(betterBubble([48, 78, 1, 2, 3, 5, 7, 4, 22, 15, 17, 98, 40, 16]));
