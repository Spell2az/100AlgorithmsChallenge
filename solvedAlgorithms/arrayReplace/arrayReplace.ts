function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   return inputArray.map(el => el === elemToReplace ? substitutionElem : el)
}

console.log(arrayReplace([1, 2, 1], 1, 3));