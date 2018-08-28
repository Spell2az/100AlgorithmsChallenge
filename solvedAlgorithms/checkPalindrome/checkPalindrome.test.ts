import { checkPalindrome } from './checkPalindrome';

describe('checkPalindrome', () => {
  it('should return true', () => {
    expect(checkPalindrome('aba')).toBe(true)
  })

  it('should return true', () => {
    expect(checkPalindrome('abcba')).toBe(true)
  })

  it('should return false', () => {
    expect(checkPalindrome('abc')).toBe(false)
  })


})