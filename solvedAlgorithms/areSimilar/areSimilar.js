function areSimilar(a, b) {
    var first = [];
    var second = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            first.push(a[i]);
            second.push(b[i]);
        }
        if (first.length > 2) {
            return false;
        }
    }
    return first[0] === second[1] && first[1] === second[0];
}
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
