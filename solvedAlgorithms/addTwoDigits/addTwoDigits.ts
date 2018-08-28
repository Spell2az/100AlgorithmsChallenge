export function addTwoDigits(n: any): number {

  return n.toString().split('').map(num => parseInt(num)).reduce((acc, curr) => acc + curr)
}

