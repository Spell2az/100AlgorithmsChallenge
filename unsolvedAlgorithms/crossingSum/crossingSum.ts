function crossingSum(matrix: number[][], a: number, b: number): number {
  const column = matrix
    .reduce((acc, curr) => {
      return [...acc, curr[b]];
    }, [])
    .filter((_, idx) => idx !== a);

  const row = matrix[b];

  return column.concat(row).reduce((acc, cur) => acc + cur, 0);
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));
