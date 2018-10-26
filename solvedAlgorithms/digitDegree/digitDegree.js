function digitDegree(n) {
    var answer = 0;
    while (n > 9) {
        n = sum(getDigit(n));
        answer++;
    }
    return answer;
}
function sum(arr) {
    return arr.reduce(function (acc, curr) { return acc + curr; });
}
function getDigit(n) {
    return n.toString().split("").map(function (num) { return parseInt(num, 10); });
}
console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
