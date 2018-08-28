import { evenDigitsOnly } from './evenDigitsOnly';

describe('evenDigitsOnly', () => {
  test('returns boolean', () => {
    expect(typeof evenDigitsOnly(1)).toBe('boolean')
  })

  test('should return true', () => {
    expect(evenDigitsOnly(2)).toBe(true)
  })

  test('should return false', () => {
    expect(evenDigitsOnly(123)).toBe(false)
    expect(evenDigitsOnly(990)).toBe(false)
  })



})