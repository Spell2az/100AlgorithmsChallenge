function minesweeper(matrix) {
    const res = [];

    for (let row = 0; row < matrix.length; row++) {
        res.push([])
        for (let col = 0; col < matrix[row].length; col++) {
            res[row].push(countMinesAround(row, col, matrix));
        }
    }
    return res;
}
function countMinesAround(posX, posY, matrix) {
    let mines = 0;
    const rowLength = matrix.length;
    const colLength = matrix[0].length

    for (let row = posY - 1; row < posY + 1; row++) {
       
        for (let col = posX - 1; col < posX + 1; col++) {
            if (row >= 0 && row < rowLength && col >= 0 && col < colLength) {
               
                if(matrix[row][col] && !( row === posX && col === posY)) {
                    console.log(row)
                    console.log(col)
                    console.log(matrix[row][col]);
                    console.log('-----')
                    mines++;}
           }
        }
    }
    return mines;
}
const mineField = [[true,false], 
[true,false], 
[false,true], 
[false,false], 
[false,false]];
console.log(countMinesAround(0, 1, mineField));
console.log(minesweeper(mineField));
console.log([[1,2], 
    [2,3], 
    [2,1], 
    [1,1], 
    [0,0]]);
