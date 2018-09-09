function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  const differences: number[] = [];

  for (let i: number = 1; i < inputArray.length; i++) {
    differences.push(Math.abs(inputArray[i - 1] - inputArray[i]));
  }

  return Math.max(...differences);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));