export function houseNumbersSum(inputArray: number[]): number {
  if (inputArray.length === 0) return 0

  let sum = 0;

  for (let num of inputArray) {
    if (num === 0) break;
    sum += num;
  }
  return sum
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));