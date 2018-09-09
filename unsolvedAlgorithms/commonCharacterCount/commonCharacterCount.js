function commonCharacterCount(s1, s2) {
    var common = 0;
    var count1 = getCharObj(s1);
    var count2 = getCharObj(s2);
    Object.keys(count1).forEach(function (char) {
        if (count2[char]) {
            common += count1[char] === count2[char] || count2[char] > count1[char] ? count1[char] : count2[char];
        }
    });
    return common;
}
function getCharObj(str) {
    return str.split('').reduce(function (acc, curr) {
        if (!acc[curr]) {
            acc[curr] = 1;
        }
        else {
            acc[curr]++;
        }
        return acc;
    }, {});
}
console.log(commonCharacterCount('aabcc', 'adcaa'));
