function convertString(s, t) {
    var searchIndex = 0;
    for (var char in t) {
        var currentIndex = s.indexOf(t[char], searchIndex);
        if ((currentIndex === -1) | (s.length < t.length))
            return false;
        searchIndex = currentIndex;
    }
    return true;
}
console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
