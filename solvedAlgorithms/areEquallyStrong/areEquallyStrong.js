function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var sameSide = yourLeft === friendsLeft && friendsRight === yourRight;
    var oppositeSide = yourLeft === friendsRight && yourRight === friendsLeft;
    return sameSide || oppositeSide;
}
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
