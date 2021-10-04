function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  const retObj = { status: '', change: [] };
  const myArray = cid.concat().reverse();
  let diff = cash - price;
  let total = 0;

  for (let price of myArray) {
    total += price[1];
    const value = currencyUnit[price[0]];
    const nums = price[1] / value;
    const leftOver = Math.floor(diff / value);
    const limitation = (nums > leftOver ? leftOver : nums) * value;
    diff -= limitation;
    if (limitation) {
      if (diff <= 0.01 && diff) {
        diff -= diff;
        retObj.change.push([price[0], limitation + 0.01]);
      } else {
        retObj.change.push([price[0], limitation]);
      }
    }
  }
  if (cash - price === total) {
    retObj.status = 'CLOSED';
    retObj.change = cid;
    return retObj;
  } else if (diff > 0) {
    console.log(diff);
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  retObj.status = 'OPEN';
  return retObj;
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
