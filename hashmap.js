//Most languages have a built in class for Hashmaps just as they do for arrays and such. Don't typically implement our own version.
//1337
const stringToNum = (str) => {
  const hashMap = new Map();
  hashMap.set('0', 0);
  hashMap.set('1', 1);
  hashMap.set('2', 2);
  hashMap.set('3', 3);
  hashMap.set('4', 4);
  hashMap.set('5', 5);
  hashMap.set('6', 6);
  hashMap.set('7', 7);
  hashMap.set('8', 8);
  hashMap.set('9', 9);

  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (!hashMap.get(str[i])) return 0;
    total += hashMap.get(str[i]) * 10 ** (str.length - i - 1);
  }
  console.log(hashMap.keys());
  console.log(hashMap.values());
  console.log(hashMap.size);
  console.log(hashMap.has('3'));

  return total;
};

console.log(stringToNum('1337'));
