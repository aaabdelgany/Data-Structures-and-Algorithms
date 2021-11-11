function isCryptSolution(crypt, solution) {
  const solObj = {};
  for (let sol of solution) {
    solObj[sol[0]] = sol[1];
  }
  const cs1 = convertCrypt(crypt[0], solObj);
  const cs2 = convertCrypt(crypt[1], solObj);
  const cs3 = convertCrypt(crypt[2], solObj);
  if (cs1 === '0' && cs2 === '0' && cs3 === '0') return true;

  if (cs1[0] === '0' || cs2[0] === '0' || cs3[0] === '0') return false;
  if (Number(cs1) + Number(cs2) === Number(cs3)) return true;

  return false;
}

const convertCrypt = (crypt, solObj) => {
  let conversion = '';
  console.log(crypt, solObj);
  for (let letter of crypt) {
    conversion += solObj[letter];
  }
  return conversion;
};
const solution = [
  [
    ['O', '1'],
    ['T', '0'],
    ['W', '9'],
    ['E', '5'],
    ['N', '4'],
  ],
];
crypt = ['TEN', 'TWO', 'ONE'];
console.log(isCryptSolution(crypt, solution));
