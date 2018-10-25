function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let sum = inputArray.slice(0, k).reduce((acc, curr) => acc + curr);
  let currSum = sum;
  for (let i = 1; i < inputArray.length - k + 1; i++) {
    currSum = currSum - inputArray[i - 1] + inputArray[i + k - 1];
    if (currSum > sum) {
      sum = currSum;
    }
  }
  return sum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));