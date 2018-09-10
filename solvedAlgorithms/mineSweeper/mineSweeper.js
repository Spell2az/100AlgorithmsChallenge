"use strict";
exports.__esModule = true;
function minesweeper(matrix) {
    var res = [];
    for (var row = 0; row < matrix.length; row++) {
        res.push([]);
        for (var col = 0; col < matrix[row].length; col++) {
            res[row].push(countMinesAround(row, col, matrix));
        }
    }
    return res;
}
exports.minesweeper = minesweeper;
function countMinesAround(posY, posX, matrix) {
    var mines = 0;
    var rowLength = matrix.length;
    var colLength = matrix[0].length;
    for (var row = posY - 1; row <= posY + 1; row++) {
        for (var col = posX - 1; col <= posX + 1; col++) {
            if (row >= 0 && row < rowLength && col >= 0 && col < colLength) {
                // console.log(row, col, matrix[row][col]);
                console.log("row " + row + " posX " + posX + " col " + col + " posY " + posY, !(row === posX && col === posY));
                if (!(row === posX && col === posY)) {
                    // console.log(row);
                    // console.log(col);
                    console.log(row, col, matrix[row][col]);
                    // console.log('-----');
                    mines++;
                }
            }
        }
    }
    return mines;
}
exports.countMinesAround = countMinesAround;
var minefield = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
];
var shouldBeFalse = minefield[0][2];
console.log(shouldBeFalse);
console.log(countMinesAround(0, 2, minefield));
console.log(minesweeper(minefield));
