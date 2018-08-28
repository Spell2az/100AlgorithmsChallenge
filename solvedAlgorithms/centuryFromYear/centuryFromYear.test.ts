import { centuryFromYear } from './centuryFromYear';

describe('centuryFromYear', () => {
  it('should return 17', () => {
    expect(centuryFromYear(1700)).toBe(17)
  })

  it('should return 20', () => {
    expect(centuryFromYear(1905)).toBe(20)
  })
})