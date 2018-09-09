function minesweeper(matrix: boolean[][]): number[][] {
  const res: number[][] = [];


  return res;
}

function countMinesAround(posY, posX, matrix) {

  let mines = 0;
  const rowLength = matrix[0][0];
  const colLength = matrix[0];

  for (let row = posY - 1; row < posY - 1 + 3; row++) {
    for (let col = posX - 1; col < posX - 1 + 3; col++) {
      if (row >= 0 && row < rowLength && col >= 0 && col < colLength) {
        mines += true === matrix[row][col] ? 1 : 0;
        //matrix[row][col] && mines++;
      }
      //console.log(row, col, matrix[row][col])

      //console.log(image[col][row], col, row)
    }
  }
  return mines;
}

const mineField = [[true, false, false],
[false, true, false],
[false, false, false]];

console.log(countMinesAround(1, 1, mineField));

//console.log(minesweeper(mineField));