function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {
  return (nCols + 1 - col) * (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3));