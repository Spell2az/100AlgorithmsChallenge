function makeArrayConsecutive2(statues: number[]): number {
  const max: number = Math.max(...statues);
  const min: number = Math.min(...statues);

  return (max - min) + 1 - statues.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));