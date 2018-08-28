import { firstDigit } from './firstDigit';

describe('firstDigit', () => {
  it('returns a string', () => {
    expect(typeof firstDigit('aa1')).toBe('string')
  })

  it('shoud return 1', () => {
    expect(firstDigit('var_1__Int')).toBe('1')
  })

  it('shoud return 2', () => {
    expect(firstDigit('q2q-q')).toBe('2')
  })

  it('shoud return 0', () => {
    expect(firstDigit('0ss')).toBe('0')
  })
})



