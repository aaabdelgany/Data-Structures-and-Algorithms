function convertToRoman(num) {
  let romNum = '';
  let holder = num;
  if (Math.floor(holder / 1000) >= 1) {
    romNum += 'M'.repeat(Math.floor(holder / 1000));
    holder -= 1000 * Math.floor(holder / 1000);
  }
  if (Math.floor(holder / 900) >= 1) {
    romNum += 'CM';
    holder -= 900;
  }
  if (Math.floor(holder / 500) >= 1) {
    romNum += 'D';
    holder -= 500;
  }
  if (Math.floor(holder / 400) >= 1) {
    romNum += 'CD';
    holder -= 400;
  }
  if (Math.floor(holder / 100) >= 1) {
    romNum += 'C'.repeat(Math.floor(holder / 100));
    holder -= 100 * Math.floor(holder / 100);
  }
  if (Math.floor(holder / 90) >= 1) {
    romNum += 'XC';
    holder -= 90;
  }
  if (Math.floor(holder / 50) >= 1) {
    romNum += 'L';
    holder -= 50;
  }
  if (Math.floor(holder / 40) >= 1) {
    romNum += 'XL';
    holder -= 40;
  }
  if (Math.floor(holder / 10) >= 1) {
    romNum += 'X'.repeat(Math.floor(holder / 10));
    holder -= 10 * Math.floor(holder / 10);
  }
  if (Math.floor(holder / 9) >= 1) {
    romNum += 'IX';
    holder -= 9;
  }
  if (Math.floor(holder / 5) >= 1) {
    romNum += 'V';
    holder -= 5;
  }
  if (Math.floor(holder / 4) >= 1) {
    romNum += 'IV';
    holder -= 4;
  }
  if (Math.floor(holder / 1) >= 1) {
    romNum += 'I'.repeat(Math.floor(holder));
    holder -= holder;
  }

  return romNum;
  //  return num;
}

// console.log(convertToRoman(400));

// console.log(convertToRoman(1000));

function rot13(str) {
  let pH = '';
  for (let c of str) {
    const code = c.charCodeAt();
    if (code < 65 || code > 90) {
      pH += c;
      continue;
    }
    console.log(code);
    if (code < 78) {
      pH += String.fromCharCode(code + 13);
    } else {
      pH += String.fromCharCode(code - 13);
    }
  }
  return pH;
}
// console.log(rot13('SERR PBQR PNZC'));

function telephoneCheck(str) {
  //   const regex = /[0-9]/g;
  //   const array = [...str.matchAll(regex)];
  //   if (array.length === 11) {
  //     if (array[0][0] !== 1 && array[0][0] !== '1') return false;
  //   }
  //   if (array.length === 10 || array.length === 11) {
  //     return true;
  //   }
  //   return false;
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

//what do I want to do?
//I can take the array that is passed on and match it to my object to get the value, if the diff
