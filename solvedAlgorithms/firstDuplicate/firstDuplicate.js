function firstDuplicate(a) {
    var notDuplicates = {};
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var i = a_1[_i];
        if (notDuplicates.hasOwnProperty(i)) {
            return i;
        }
        notDuplicates[i] = 1;
    }
    return -1;
}
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
