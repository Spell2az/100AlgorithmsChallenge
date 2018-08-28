import { compareIntegers } from './compareIntegers';

describe('compareIntegers', () => {
  it('returns a string', () => {
    expect(typeof compareIntegers('', '')).toBe('string')
  })

  it('returns less', () => {
    expect(compareIntegers('12', '13')).toBe('less')
  })

  it('returns greater', () => {
    expect(compareIntegers('345', '10')).toBe('greater')
  })

  it('returns equal', () => {
    expect(compareIntegers('234', '234')).toBe('equal')
  })
})