function almostIncreasingSequence(sequence) {
    var culprit = getTheCulpritIndex(sequence);
    if (culprit === -1 && isIncreasing(sequence))
        return true;
    return isIncreasing(sequence.filter(function (_, idx) { return idx !== culprit; }));
}
function isIncreasing(seq) {
    for (var i = 1; i < seq.length; i++) {
        if (seq[i] <= seq[i - 1])
            return false;
    }
    return true;
}
function getTheCulpritIndex(seq) {
    //if (seq[seq.length - 1] <= seq[seq.length - 2]) return seq.length - 1
    for (var i = 1; i < seq.length - 2; i++) {
        if (seq[i - 1] <= seq[i] && seq[i] >= seq[i + 1] && seq[i - 1] < seq[i + 1])
            return i;
        if (seq[i - 1] >= seq[i] && seq[i] <= seq[i + 1] && seq[i - 1] < seq[i + 1])
            return i;
    }
    return -1;
}
console.log(almostIncreasingSequence([1, 3, 2, 1])); //false
console.log(almostIncreasingSequence([1, 3, 2])); // true
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6])); // true
console.log(getTheCulpritIndex([1, 2, 3, 4, 3, 6]));
// console.log([1, 3, 2, 1].slice(1, 2))
// console.log(isIncreasing([1, 3, 2, 1].slice(1, 2)));
