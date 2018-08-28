export function centuryFromYear(year: number): number {
  const centuryStarted: boolean = year % 100 > 0;

  return centuryStarted ? Math.floor(year / 100) + 1 : Math.floor(year / 100)
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));