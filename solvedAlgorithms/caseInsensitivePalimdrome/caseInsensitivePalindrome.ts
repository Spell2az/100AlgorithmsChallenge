function isCaseInsensitivePalindrome(inputString: string): boolean {
  const lowercase = inputString.toLocaleLowerCase();
  return lowercase === lowercase.split('').reverse().join('')
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));