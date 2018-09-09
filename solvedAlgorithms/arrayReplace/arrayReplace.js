function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(function (el) { return el === elemToReplace ? substitutionElem : el; });
}
console.log(arrayReplace([1, 2, 1], 1, 3));
