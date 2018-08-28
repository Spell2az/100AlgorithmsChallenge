function centuryFromYear(year) {
    var centuryStarted = year % 100 > 0;
    return centuryStarted ? Math.floor(year / 100) + 1 : Math.floor(year / 100);
}
console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
