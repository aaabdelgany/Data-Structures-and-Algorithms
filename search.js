//linear search function that returns the index of the specified argument and if it isn't there it returns -1
const linearSearch = (arr, arg) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arg) return i;
  }
  return -1;
};

//binary search function which accepts a sorted array and an argument and returns true if the value is there

const binarySearch = (arr, arg) => {
  const pivot = Math.ceil(arr.length / 2);
  //   if (arr.length <= 1 && arr[0] !== arg) return false;
  //   if (arr[pivot] === arg) return true;
  //   else if (arr[pivot] < arg) return binarySearch(arr.slice(pivot + 1), arg);
  //   else if (arr[pivot] > arg) return binarySearch(arr.slice(0, pivot), arg);
  //   console.log(pivot);
  if (arr.length <= 1 && arr[0] !== arg) return -1;
  if (arr[pivot] === arg) return pivot;
  else if (arr[pivot] < arg) {
    const newsearch = binarySearch(arr.slice(pivot), arg);
    return newsearch === -1 ? -1 : pivot + newsearch;
  } else if (arr[pivot] > arg) return binarySearch(arr.slice(0, pivot), arg);
};
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));
console.log(binarySearch([1, 2, 3, 4, 5], -1));
console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 6)
);

console.log(
  binarySearch(
    [
      1, 2, 3, 4, 5, 16, 17, 18, 19, 20, 56, 78, 99, 100, 200, 345, 456, 678,
      980, 999, 11100, 120000, 30000000, 4000000000, 500000000000000,
      600000000000000000,
    ],
    999
  )
);

//naive string search implementation
const naiveSearch = (str, arg) => {
  let matches = 0;

  for (let i = 0; i < str.length; i++) {
    for (let y = 0; y < arg.length; y++) {
      if (str[i + y] !== arg[y]) {
        break;
      }
      if (y === arg.length - 1) matches++;
    }
  }
  return matches;
};

console.log(naiveSearch('noty', 'no'));
console.log(naiveSearch('noty', 'ty'));
console.log(naiveSearch('ifrahifrahifrahifrahjaan', 'jaan'));
console.log(naiveSearch('ifrahifrahifrahifrahjaan', 'ifrah'));
