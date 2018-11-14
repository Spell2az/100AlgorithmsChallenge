function convertString(s: string, t: string): boolean {
  let searchIndex = 0;
  for (let char in t) {
    const currentIndex = s.indexOf(t[char], searchIndex);

    if ((currentIndex === -1) | (s.length < t.length)) return false;

    searchIndex = currentIndex;
  }

  return true;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
