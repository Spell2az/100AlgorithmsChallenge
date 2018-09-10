function alphabeticShift(inputString: string): string {
  const codes: number[] = inputString.split('').map((_, i) => inputString.charCodeAt(i));

  return codes.map(code => {
    if (code === 122) {
      return String.fromCharCode(97)
    } else {
      return String.fromCharCode(code + 1)
    }
  }).join('');
}

console.log(alphabeticShift('crazy'));