function longestDigitsPrefix(inputString) {
    return inputString.slice(0, inputString.search(/[a-z]/));
}
console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('123343aa1'));
console.log(longestDigitsPrefix('aa1'));
