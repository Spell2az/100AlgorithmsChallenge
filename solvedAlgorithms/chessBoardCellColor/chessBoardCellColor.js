function chessBoardCellColor(cell1, cell2) {
    var chessBoard = buildChessBoard();
    var _a = getNumericPos(cell1), col1 = _a[0], row1 = _a[1];
    var _b = getNumericPos(cell2), col2 = _b[0], row2 = _b[1];
    return chessBoard[col1][row1] === chessBoard[col2][row2];
}
function getNumericPos(pos) {
    var _a = pos.split(''), row = _a[0], col = _a[1];
    return [row.charCodeAt(0) - 65, parseInt(col) - 1];
}
function buildChessBoard() {
    var board = [];
    for (var i = 0; i < 8; i++) {
        board.push([]);
        for (var j = 0; j < 8; j++) {
            board[i].push((i + j) % 2);
        }
    }
    return board;
}
console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
