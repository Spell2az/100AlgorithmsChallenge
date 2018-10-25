function containsCloseNums(nums, k) {
  const sortedNumbers = nums.reduce((acc, curr, idx) => {
    if (!acc.hasOwnProperty(curr)) {
      acc[curr] = [idx];
    } else {
      acc[curr].push(idx);
    }
    return acc;
  }, {});

  const differences = Object.keys(sortedNumbers)
    .filter(number => sortedNumbers[number].length > 1)
    .map(num => sortedNumbers[num])
    .map(array => Math.abs(array[0] - array[1]));



  return differences.includes(k);
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));