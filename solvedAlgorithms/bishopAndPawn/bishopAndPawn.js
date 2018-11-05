function bishopAndPawn(bishop, pawn) {
    var posBishop = convertCoordinates(bishop);
    var posPawn = convertCoordinates(pawn);
    return (Math.abs(posBishop[0] - posPawn[0]) === Math.abs(posBishop[1] - posPawn[1]));
}
function convertCoordinates(position) {
    var columns = "abcdefgh";
    var _a = position.split(""), col = _a[0], row = _a[1];
    return [columns.indexOf(col), parseInt(row, 10) - 1];
}
console.log(bishopAndPawn("a1", "c3"));
