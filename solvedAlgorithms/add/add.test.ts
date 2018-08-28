import { add, addAll } from './add';

describe('add', () => {
  it('should return 2', () => {
    expect(add(0, 2)).toBe(2)
  })

  it('should return 0', () => {
    expect(add(-1, 1)).toBe(0)
  })
})

describe('addAll', () => {
  it('should return 7', () => {
    expect(addAll(0, 2, 3, 2)).toBe(7)
  })

  it('should return -1', () => {
    expect(addAll(-1, 1, 0, 0, 10, - 11)).toBe(-1)
  })
})