function matrixElementsSum(matrix: any[][]): number {
    const hauntedIdx: boolean[] = [...Array(matrix[0])].map((_ => false));

    let sum: number = 0;
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            if (hauntedIdx[j] === true || matrix[i][j] === 0) {
                hauntedIdx[j] = true;

            } else {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
