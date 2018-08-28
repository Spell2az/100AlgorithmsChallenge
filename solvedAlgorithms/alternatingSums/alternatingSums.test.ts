import { alternatingSums, splitEvenOddPositions, addNumbersInArray } from './alternatingSums';

const testArray = [50, 60, 60, 45, 70];
const testArray2 = [10, 20, 30, 40, 50, 50, 100]
describe('alternatingSums', () => {

  it('returns array', () => {
    expect(Array.isArray(alternatingSums(testArray))).toBe(true)
  })

  it('called with testArray returns array equal to [180,105]', () => {
    expect(alternatingSums(testArray)).toEqual([180, 105])
  })

  it('called with testArray2 returns array equal to [190, 110]', () => {
    expect(alternatingSums(testArray2)).toEqual([190, 110])
  })
})

describe('test helper functions', () => {
  it('returns array', () => {

    expect(Array.isArray(splitEvenOddPositions('even', testArray))).toBe(true)
  })

  it('returns array of length 3', () => {
    expect(splitEvenOddPositions('even', testArray).length).toBe(3)
  })

  it('output with testArray even positiion matches [50, 60, 70]', () => {
    expect(splitEvenOddPositions('even', testArray)).toEqual([50, 60, 70])
  })

  it('output with testArray odd positiion matches [60, 45]', () => {
    expect(splitEvenOddPositions('odd', testArray)).toEqual([60, 45])
  })

  it('[60, 45] retruns 105', () => {
    expect(addNumbersInArray([60, 45])).toBe(105)
  })

  it(' [50, 60, 70] retruns 180', () => {
    expect(addNumbersInArray([50, 60, 70])).toBe(180)
  })
})