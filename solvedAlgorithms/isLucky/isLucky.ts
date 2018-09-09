function isLucky(n: number): boolean {
  const [a, b]: number[] = n.toString()
    .split('')
    .reduce((acc, curr, i, arr) => {
      acc[arr.length / 2 > i ? 0 : 1] += parseInt(curr);

      return acc
    }, [0, 0])
  return a === b
}

console.log(isLucky(1230));
console.log(isLucky(239017));