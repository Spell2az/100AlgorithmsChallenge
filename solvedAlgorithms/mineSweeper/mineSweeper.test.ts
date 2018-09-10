import { minesweeper, countMinesAround } from "./mineSweeper";

describe('test countMinesAround', () => {
  const minefield = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ];

  it(' should return 8 for position [1][1]', () => {
    expect(countMinesAround(1, 1, minefield)).toBe(8)
  })

  it(' should return 3 for position [0][0]', () => {
    expect(countMinesAround(0, 0, minefield)).toBe(3)
  })

  it(' should return 3 for position [0][2]', () => {
    expect(countMinesAround(0, 2, minefield)).toBe(3)
  })
});