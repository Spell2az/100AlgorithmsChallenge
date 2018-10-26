function digitDegree(n: number): number {


  let answer: number = 0;
  while (n > 9) {
    n = sum(getDigit(n))
    answer++;
  }
  return answer;
}

function sum(arr: number[]): number {
  return arr.reduce((acc, curr): number => acc + curr);
}

function getDigit(n): [] {
  return n.toString().split("").map(num => parseInt(num, 10));
}


console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));