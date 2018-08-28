function uniqueDigitProducts(a) {
  const sum = toSum => toSum.reduce((acc, curr) => acc * curr)
  const getNumber = str => str.toString().split('').map((b) => +b);

  const sumProducts = new Set(a.map(getNumber).map(sum));
  
  return sumProducts.size;
}
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));