function absoluteValuesSumMinimization(a: number[]): number {
  const sums = a.reduce((acc, curr) => {
    acc[curr] = a.map(el => Math.abs(el - curr)).reduce((acc, curr) => acc + curr)

    return acc;
  }, {})

  const sortByValue = Object.entries(sums).sort(((a, b) => a[0] - b[0])
  return sortByValue[0][0];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));