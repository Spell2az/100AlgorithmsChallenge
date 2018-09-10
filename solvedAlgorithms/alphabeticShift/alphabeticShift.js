function alphabeticShift(inputString) {
    var codes = inputString.split('').map(function (_, i) { return inputString.charCodeAt(i); });
    return codes.map(function (code) {
        if (code === 122) {
            return String.fromCharCode(97);
        }
        else {
            return String.fromCharCode(code + 1);
        }
    }).join('');
}
console.log(alphabeticShift('crazy'));
