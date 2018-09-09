function boxBlur(image) {
    var res = [];
    for (var row = 1; row < image.length - 1; row++) {
        res.push([])
        for (var col = 1; col < image[row].length - 1; col++) {
            res[row-1].push(getAverageValue(row, col, image));
        }
    }
    return res;
}
function getAverageValue(posY, posX, image) {
    var sum = 0;
    var count = 0;
    
    
    for (let row = posY - 1; row < posY - 1 + 3; row++) {
        for (let col = posX - 1; col < posX - 1 + 3; col++) {
            count++;
            sum += image[row][col];
            //console.log(image[col][row], col, row)
        }
    }
    return Math.floor(sum / count);
}

const img = [[1, 1, 1],
[1, 7, 1],
[1, 1, 1]];


console.log(boxBlur([[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]]));


