function isLucky(n) {
    var _a = n.toString()
        .split('')
        .reduce(function (acc, curr, i, arr) {
        acc[arr.length / 2 > i ? 0 : 1] += parseInt(curr);
        return acc;
    }, [0, 0]), a = _a[0], b = _a[1];
    return a === b;
}
console.log(isLucky(1230));
console.log(isLucky(239017));
