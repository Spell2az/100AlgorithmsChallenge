function sortByHeight(a: number[]): number[] {
  const sorted: number[] = a.filter(heigth => heigth !== -1).sort((a, b) => a - b);

  return a.map(el => {
    if (el !== -1) { return sorted.shift(); }

    return -1;
  });
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));