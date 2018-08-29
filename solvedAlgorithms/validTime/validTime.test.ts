import { validTime } from './validTime';

describe('validTime', () => {

  it('should return true', () => {
    expect(validTime('13:58')).toBe(true)
  })

  it('should return false', () => {
    expect(validTime('25:51')).toBe(false)
  })
  it('should return false', () => {
    expect(validTime('02:76')).toBe(false)
  })

  it('should return true', () => {
    expect(validTime('00:00')).toBe(true)
  })

  it('should return false', () => {
    expect(validTime('99:99')).toBe(false)
  })

})
