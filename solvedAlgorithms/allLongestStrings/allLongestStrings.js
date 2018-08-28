function allLongestStrings(inputArray) {
    var maxLength = Math.max.apply(Math, inputArray.map(function (str) { return str.length; }));
    return inputArray.filter(function (str) { return maxLength === str.length; });
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["abac", "aa", "addd", "vcd", "aba"]));
