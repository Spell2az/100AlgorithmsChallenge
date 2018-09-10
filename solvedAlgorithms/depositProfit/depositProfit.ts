function depositProfit(deposit: number, rate: number, threshold: number): number {
  return getYear(0, deposit, rate, threshold);
}

function getYear(year: number, current: number, rate: number, threshold: number): number {
  if (current >= threshold) {
    return year;
  }
  return getYear(year + 1, current * (1 + rate / 100), rate, threshold);
}

console.log(depositProfit(100, 20, 170));