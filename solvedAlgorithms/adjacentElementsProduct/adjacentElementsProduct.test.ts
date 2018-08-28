import { adjacentElementsProduct } from './adjacentElementsProduct';

describe('adjacentElementsProduct', () => {
  it('should return 21', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21)
  })

  it('should return 6', () => {
    expect(adjacentElementsProduct([-2, -3, 1, 3])).toBe(6)
  })

  it('should return 0', () => {
    expect(adjacentElementsProduct([0, 0, 0, -1, 1])).toBe(0)
  })


})