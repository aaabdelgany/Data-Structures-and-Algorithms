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
    if (noSwaps) {
      break;
    }
  }
  return arr;
};
// console.log(betterBubble([48, 78, 1, 2, 3, 5, 7, 4, 22, 15, 17, 98, 40, 16]));

//this is quadratic time, its better than bubblesort in only one aspect - space complexity.
//theres only ever 1 swap so it doesnt take much space.
const selectionSort = (arr) => {
  let index;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        index = j;
      }
    }
    if (min != arr[i]) {
      arr[index] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
};
// console.log(selectionSort([5, 4, 3, 2, 1]));

//similar to bubble and selection sort, but this one is better in some key scenarios
//creates a portion of the array which is always sorted and grows until it takes over the
//whole array
//a note about insertion sort, if you have an online algorithm(basically an online stream of data that)
//keeps adding, then insertionsort works really well with that data and it maintains a running sort well.
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (key < arr[j]) {
        arr[i] = arr[j];
        i--;
        arr[j] = key;
      } else {
        break;
      }
    }
  }
  return arr;
};

// console.log(insertionSort([5, 3, 4, 2, 1, 6]));
// console.log(insertionSort([5, 3, 4, 2, 74, 82, 9861, 6, 1]));
// console.log(insertionSort([1, 2, 3, 4, 5, 6]));

//function that takes two sorted arrays and merges them in order
const merge = (arr1, arr2) => {
  let papa = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      papa.push(arr1[index1]);
      index1++;
      // console.log(papa, index1, 'index 1');
    } else {
      papa.push(arr2[index2]);
      index2++;
      // console.log(papa, index2, 'index 2');
    }
  }
  if (index1 === arr1.length) {
    for (let y of arr2.slice(index2)) {
      papa.push(y);
    }
  } else if (index2 === arr2.length) {
    for (let y of arr1.slice(index1)) {
      papa.push(y);
    }
  }
  // console.log(papa);
  return papa;
};
// console.log(
//   merge([1, 2, 8, 15, 17, 33, 45, 48, 99], [4, 5, 10, 16, 27, 28, 29, 30])
// );
// console.log(merge([1, 2, 8, 17, 1999], [3, 5, 10, 26, 38, 2000]));
//break array in half, until length is 1 or empty
//then merge smaller arrays back with the merge function until we're back at the full length of the array
//return merged array
const mergesort = (arr) => {
  const half = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }
  return merge(mergesort(arr.slice(0, half)), mergesort(arr.slice(half)));
};

// console.log(mergesort([1, 6, 3, 4, 5, 10, 22, 58, 2, 99, 1000, 14, 15]));

const partition = (arr, start = 0, end = arr.length) => {
  const pivot = arr[start];
  let swapIndex = start;

  const swap = (arr, i, y) => {
    const temp = arr[i];
    arr[i] = arr[y];
    arr[y] = temp;
  };

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};
const arr = [7, -50, 47, 1, 5, 4, 2, 8, 3, 100, -15];
// console.log(partition(arr));

const quicksort = (arr, start = 0, end = arr.length) => {
  if (end - start < 2) {
    return;
  }
  const index = partition(arr, start);
  quicksort(arr, start, index - 1);
  quicksort(arr, index + 1, end);
  return arr;
};

console.log(quicksort(arr));
