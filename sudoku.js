function sudoku2(grid) {
  const heightObj = {};
  const lengthObj = {};
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      const item = grid[i][j];
      if (item !== '.') {
        if (heightObj[item]) {
          for (let height of heightObj[item]) {
            if (height === i) return false;
            // console.log(height, item, i);
          }
          //   if (heightObj[item].includes(i)) return false;
          heightObj[item].push(i);
        } else {
          heightObj[item] = [i];
        }

        if (lengthObj[item]) {
          if (lengthObj[item].includes(j)) return false;
          lengthObj[item].push(j);
        } else {
          lengthObj[item] = [j];
        }
        for (let y = i - (i % 3); y < i - (i % 3) + 3; y++) {
          for (let z = j - (j % 3); z < j - (j % 3) + 3; z++) {
            if (grid[y][z] === item && y !== i && z !== j) return false;
          }
        }
      }
    }
  }
  return true;
}

const grid = [
  ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.'],
];
const grid2 = [
  ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
  ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
  ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
  ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
  ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '.', '3', '.', '.', '.', '.'],
];

const grid3 = [
  ['.', '4', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '1', '.', '.', '7', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '3', '.', '.', '.', '6', '.'],
  ['.', '.', '.', '.', '.', '6', '.', '9', '.'],
  ['.', '.', '.', '.', '1', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '8', '.', '.', '.', '.', '.'],
];

console.log(sudoku2(grid));

console.log(sudoku2(grid2));

console.log(sudoku2(grid3));