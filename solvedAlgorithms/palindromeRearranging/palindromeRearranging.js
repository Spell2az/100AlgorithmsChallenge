function palindromeRearranging(inputString) {
    var sortedLetters = inputString.split('').reduce(function (acc, curr) {
        if (acc[curr]) {
            acc[curr] += 1;
        }
        else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    var result = Object.keys(sortedLetters).reduce(function (acc, curr) {
        acc += sortedLetters[curr] % 2;
        return acc;
    }, 0);
    return result <= 1;
}
console.log(palindromeRearranging('aabb'));
