function shapeArea(n) {
    if (n === 0) {
        return 1;
    }
    return 4 * (n - 1) + shapeArea(n - 1);
}
console.log(shapeArea(2));
console.log(shapeArea(3));
