import { addTwoDigits } from "./addTwoDigits";

describe('addTwoDigits', () => {
  it('should return 11', () => {
    expect(addTwoDigits(29)).toBe(11)
  })

  it('should return 10', () => {
    expect(addTwoDigits(55)).toBe(10)
  })

  it('should return 8', () => {
    expect(addTwoDigits(44)).toBe(8)
  })
  it('should return 7', () => {
    expect(addTwoDigits(25)).toBe(7)
  })
  it('should return 18', () => {
    expect(addTwoDigits(99)).toBe(18)
  })
  it('should return 1', () => {
    expect(addTwoDigits(10)).toBe(1)
  })
})