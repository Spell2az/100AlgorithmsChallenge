function seekAndDestroy(arr1, arr2) {
    return arr1.filter(function (num) { return !arr2.includes(num); });
}
console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
