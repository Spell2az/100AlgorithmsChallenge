function sumOfTwo(a, b, v) {
  const subtracted = a.map(num => v - num);
 
  for(let el of subtracted) {
   if(b.includes(el)) return true
 }

  return false
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));