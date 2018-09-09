function arrayMaximalAdjacentDifference(inputArray) {
    var differences = [];
    for (var i = 1; i < inputArray.length; i++) {
        differences.push(Math.abs(inputArray[i - 1] - inputArray[i]));
    }
    return Math.max.apply(Math, differences);
}
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
