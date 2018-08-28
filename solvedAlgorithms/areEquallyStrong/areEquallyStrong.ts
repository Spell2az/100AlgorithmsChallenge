function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const sameSide = yourLeft === friendsLeft && friendsRight === yourRight;
  const oppositeSide = yourLeft === friendsRight && yourRight === friendsLeft;

  return sameSide || oppositeSide;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
