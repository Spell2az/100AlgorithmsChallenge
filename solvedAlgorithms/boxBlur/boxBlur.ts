function boxBlur(image: number[][]): number[][] {
    const res: number[][] = [];
    for (let row = 1; row < image.length - 1; row++) {
        for (let col = 1; col < image[row].length - 1; col++) {
            res.push([getAverageValue(row, col, image)]);
        }
    }
    return res;
}

function getAverageValue(posY, posX, image: number[][]) {
    let sum = 0;
    let count = 0;
    for (let row = posY - 1; row < posY - 1 + 3; posY++) {
        for (let col = posX - 1; col < posX - 1 + 3; posX++) {
            count++;
            sum += image[col][row]
        }
    }
    return Math.floor(sum / count)
}

console.log(boxBlur([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));