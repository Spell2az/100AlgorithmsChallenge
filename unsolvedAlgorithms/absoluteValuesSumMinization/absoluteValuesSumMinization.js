function absoluteValuesSumMinimization(a) {
    var sums = a.reduce(function (acc, curr) {
        acc[curr] = a.map(function (el) { return Math.abs(el - curr); }).reduce(function (acc, curr) { return acc + curr; });
        return acc;
    }, {});
    var sortByValue = Object.entries(sums).sort(((a, b)));
    a[0] - b[0];
    return sortByValue[0][0];
}
console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
