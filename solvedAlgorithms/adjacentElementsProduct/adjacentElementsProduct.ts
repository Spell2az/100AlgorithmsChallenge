export function adjacentElementsProduct(inputArray: number[]): number {
  let product = []
  for (let i = 1; i < inputArray.length; i++) {
    product.push(inputArray[i] * inputArray[i - 1])
  }

  return Math.max(...product)
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));