function boxBlur(image: number[][]): number[][] {
    const res: number[][] = [];
    for (let row: number = 1; row < image.length - 1; row++) {
        res.push([]);

        for (let col: number = 1; col < image[row].length - 1; col++) {
            res[row - 1].push(getAverageValue(row, col, image));
        }
    }
    return res;
}

function getAverageValue(posY: number, posX: number, image: number[][]): number {
    let sum: number = 0;
    let count: number = 0;

    for (let row: number = posY - 1; row < posY - 1 + 3; row++) {
        for (let col: number = posX - 1; col < posX - 1 + 3; col++) {
            count++;
            sum += image[row][col];
        }
    }
    return Math.floor(sum / count);
}

console.log(boxBlur([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));