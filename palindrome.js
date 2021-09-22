function palindrome(str) {
  let main = str.toUpperCase();
  main = main.replace(/[^A-Z0-9]/g, '');
  console.log(main);
  let counter = 0;
  while (counter <= Math.floor((main.length - 1) / 2)) {
    if (main[counter] === main[main.length - 1 - counter]) {
      counter++;
    } else {
      return false;
    }
  }
  return true;
}

console.log(palindrome('not a palindrome'));
console.log(palindrome('racecar'));
console.log(palindrome('Race Car'));
console.log(palindrome('nah son'));
console.log(palindrome('tesset'));
console.log(palindrome('_eye'));
console.log(palindrome('almostomla'));
console.log(palindrome('1 eye for of 1 eye.'));
