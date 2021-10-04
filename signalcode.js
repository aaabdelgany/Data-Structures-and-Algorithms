function almostIncreasingSequence(sequence) {
  const length = sequence.length;
  let delNums = 0;
  for (let i = 0; i < length - 1; i++) {
    if (i === 0 && sequence[1] - sequence[i] === 0) {
      continue;
    }
    if (delNums > 1) return false;
    const current = sequence[i];
    const past = sequence[i - 1];
    const next = sequence[i + 1];
    const delcase = past === next - 1 || next - current > 1 || next === current;
    console.log(delcase, past, next, current);
    if (delcase) {
      delNums++;
      continue;
    }
    if (next < past || current > next || current < past) return false;
  }
  console.log(delNums);
  return delNums <= 1 ? true : false;
}

// console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));

function isIPv4Address(inputString) {
  // const regex=/[12]*[1-9]*[1-5]*.[12]*[1-9]*[1-5]*.[12]*[1-9]*[1-5]*.[12]*[1-9]*[1-5]/
  const regex = /[0-9]+/g;
  const array = [...inputString.matchAll(regex)];
  console.log(array.length);
  if (array.length !== 4) return false;
  if (inputString.match(/[a-zA-Z]*/)) return false;
  if (!inputString.match(/[0-9]+.[0-9]+.[0-9]+.[0-9]+/)) return false;
  for (const match of array) {
    console.log(match[0]);
    const num = Number(match[0]);
    if (num > 255) {
      return false;
    }
    if (num.toString().length < match[0].length) return false;
  }
  return true;
}

console.log(isIPv4Address('0.254.255.0'));
