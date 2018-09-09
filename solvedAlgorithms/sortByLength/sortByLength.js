function sortByLength(inputArray) {
    return inputArray.sort(function (a, b) { return a.length - b.length; });
}
console.log(sortByLength(["abc",
    "",
    "aaa",
    "a",
    "zz"]));
