export function alternatingSums(a: number[]): number[] {

  const even = splitEvenOddPositions('even', a);
  const odd = splitEvenOddPositions('odd', a);
  return [addNumbersInArray(even), addNumbersInArray(odd)]
}

export function splitEvenOddPositions(option: string, toSplit: number[]): number[] {
  if (option === 'even') {
    return toSplit.filter((_, idx) => idx % 2 === 0)
  } else if (option === 'odd') {
    return toSplit.filter((_, idx) => idx % 2 !== 0)
  }

  return []
}

export function addNumbersInArray(toAdd: number[]): number {

  return toAdd.reduce((acc, curr) => curr + acc)
}

console.log(alternatingSums([50, 60, 60, 45, 70]))