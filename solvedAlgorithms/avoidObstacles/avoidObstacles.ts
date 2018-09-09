function avoidObstacles(inputArray: number[]): number {
  for (let i: number = 2; ; i++) {
    if (inputArray.every(el => el % i !== 0)) { return i; }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));