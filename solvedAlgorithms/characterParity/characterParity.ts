function characterParity(symbol: string): string {
  const char = parseInt(symbol);
  return isNaN(char) ? 'not a digit' : char % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
