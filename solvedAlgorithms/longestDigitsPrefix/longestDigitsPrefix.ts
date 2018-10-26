function longestDigitsPrefix(inputString: string): string {
  let answer = "";
  let idx = 0;
  const regex = /[0-9]/;
  while (inputString.charAt(idx).match(regex)) {
    answer += inputString[idx];

    idx++;
  }
  return answer;
}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('123343aa1'));
console.log(longestDigitsPrefix('aa1'));