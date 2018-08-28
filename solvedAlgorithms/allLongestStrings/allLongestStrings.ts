function allLongestStrings(inputArray: string[]): string[] {
  const maxLength = Math.max(...inputArray.map(str => str.length));

  return inputArray.filter(str => maxLength === str.length)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["abac", "aa", "addd", "vcd", "aba"]));