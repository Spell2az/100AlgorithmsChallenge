export function validTime(time: string): boolean {
  const [h1, h2, _, m1, m2] = time.split('');

  return h1 < '3' && h2 < '4' && m1 < '6' && m2 <= '9'
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));