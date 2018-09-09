function sortByHeight(a) {
    var sorted = a.filter(function (heigth) { return heigth !== -1; }).sort(function (a, b) { return a - b; });
    return a.map(function (el) {
        if (el !== -1) {
            return sorted.shift();
        }
        return -1;
    });
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
