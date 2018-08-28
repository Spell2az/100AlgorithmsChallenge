export function compareIntegers(a: string, b: string): string {

  const firstInput = parseInt(a);
  const secondInput = parseInt(b);

  if (firstInput < secondInput) return 'less'
  if (firstInput > secondInput) return 'greater'
  if (firstInput === secondInput) return 'equal'

  return '';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));