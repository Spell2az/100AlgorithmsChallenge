export function add(param1: number, param2: number): number {
  return param1 + param2;
}

export function addAll(...args): number {

  return args.reduce((acc, curr) => acc + curr)
}

// function add2(param1: number[]): number {

// }
// console.log(add(1, 2));
// console.log(add(3, 2));

// console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));

