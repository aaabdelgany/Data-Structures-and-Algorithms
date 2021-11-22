// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const countObj = {};
  for (let letter of S) {
    if (countObj[letter]) {
      countObj[letter]++;
    } else {
      countObj[letter] = 1;
    }
  }
  const vals = Object.values(countObj);
  let count = 0;
  for (let i = 0; i < vals.length; i++) {
    let val = vals[i];
    vals[i] = null;
    while (vals.includes(val)) {
      if (val === 0) {
        break;
      }
      console.log(val, count);
      count++;
      val--;
    }
  }

  return count;
  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution('ccaaffddecee'));
