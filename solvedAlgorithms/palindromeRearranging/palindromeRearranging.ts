function palindromeRearranging(inputString: string): boolean {
  const sortedLetters: {} = inputString.split('').reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  const result: number = Object.keys(sortedLetters).reduce((acc, curr) => {
    acc += sortedLetters[curr] % 2;
    return acc;
  }, 0)
  return result <= 1;
}

console.log(palindromeRearranging('aabb'));