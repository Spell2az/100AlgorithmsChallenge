function longestDigitsPrefix(inputString) {
    var answer = "";
    var idx = 0;
    var regex = /[0-9]/;
    while (inputString.charAt(idx).match(regex)) {
        answer += inputString[idx];
        idx++;
    }
    return answer;
}
console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('123343aa1'));
console.log(longestDigitsPrefix('aa1'));
