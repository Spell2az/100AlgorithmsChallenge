import { houseNumbersSum } from './houseNumbersSum';

describe('houseNumberSum', () => {

  it('should return number', () => {
    expect(typeof houseNumbersSum([])).toBe('number')
  })

  it('should return 0', () => {
    expect(houseNumbersSum([])).toBe(0)
  })

  it('should return 4', () => {
    expect(houseNumbersSum([2, 2])).toBe(4)
  })

  it('should return 11', () => {
    expect(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])).toBe(11)
  })
})