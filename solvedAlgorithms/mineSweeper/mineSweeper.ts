export function minesweeper(matrix: boolean[][]): number[][] {
  const res: number[][] = [];

  for (let row: number = 0; row < matrix.length; row++) {
    res.push([]);
    for (let col: number = 0; col < matrix[row].length; col++) {
      res[row].push(countMinesAround(row, col, matrix));
    }
  }
  return res;
}

export function countMinesAround(posY: number, posX: number, matrix: boolean[][]): number {

  let mines: number = 0;
  const rowLength: number = matrix.length;
  const colLength: number = matrix[0].length;

  for (let row: number = posY - 1; row <= posY + 1; row++) {

    for (let col: number = posX - 1; col <= posX + 1; col++) {

      if (row >= 0 && row < rowLength && col >= 0 && col < colLength) {

        console.log(`row ${row} posX ${posX} col ${col} posY ${posY}`, !(row === posX && col === posY));
        if (matrix[row][col] && !(row === posY && col === posX)) {

          mines++;
        }
      }
    }
  }
  return mines;
}

const minefield = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

console.log(countMinesAround(0, 2, minefield));

console.log(minesweeper(minefield));