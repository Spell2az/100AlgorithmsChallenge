function findClosestPair(numbers: number[], sum: number): number {
  const diff = numbers.map(num => Math.abs(num - sum));
  const pairs = diff.reduce((acc, curr, idx) => {
    if
  }, [])
}




console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));


