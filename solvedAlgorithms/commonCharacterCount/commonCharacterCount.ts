function commonCharacterCount(s1: string, s2: string): number {
  let common: number = 0;

  const count1: {} = getCharObj(s1);
  const count2: {} = getCharObj(s2);

  Object.keys(count1).forEach(char => {
    if (count2[char]) {
      common += count1[char] === count2[char] || count2[char] > count1[char] ? count1[char] : count2[char];
    }
  });

  return common;
}


function getCharObj(str: string): {} {
  return str.split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;

  }, {});
}

console.log(commonCharacterCount('aabcc', 'adcaa'));