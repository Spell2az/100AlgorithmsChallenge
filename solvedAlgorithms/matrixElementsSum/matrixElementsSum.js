function matrixElementsSum(matrix) {
    var hauntedIdx = Array(matrix[0]).slice().map((function (_) { return false; }));
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (hauntedIdx[j] === true || matrix[i][j] === 0) {
                hauntedIdx[j] = true;
            }
            else {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
console.log(matrixElementsSum([[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]));
