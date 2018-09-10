function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const chessBoard: number[][] = buildChessBoard();
  const [col1, row1] = getNumericPos(cell1);
  const [col2, row2] = getNumericPos(cell2);

  return chessBoard[col1][row1] === chessBoard[col2][row2]
}



function getNumericPos(pos: string): number[] {
  const [row, col] = pos.split('');
  return [row.charCodeAt(0) - 65, parseInt(col) - 1];
}

function buildChessBoard(): number[][] {
  const board: number[][] = [];
  for (let i: number = 0; i < 8; i++) {
    board.push([]);

    for (let j: number = 0; j < 8; j++) {

      board[i].push((i + j) % 2)
    }
  }
  return board;
}
console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
