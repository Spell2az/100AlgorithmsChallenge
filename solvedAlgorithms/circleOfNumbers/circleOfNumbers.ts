function circleOfNumbers(n: number, firstNumber: number): number {
  return (Math.floor(n / 2) + firstNumber) % n;
}

console.log(circleOfNumbers(10, 2));
