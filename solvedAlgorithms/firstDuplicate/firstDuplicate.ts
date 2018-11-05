function firstDuplicate(a: number[]): number {
  const notDuplicates = {};
  for (let i of a) {

    if (notDuplicates.hasOwnProperty(i)) { return i; }
    notDuplicates[i] = 1;
  }
  return -1;
}



console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
