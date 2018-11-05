function bishopAndPawn(bishop: string, pawn: string): boolean {
  const posBishop = convertCoordinates(bishop);
  const posPawn = convertCoordinates(pawn);

  return (
    Math.abs(posBishop[0] - posPawn[0]) === Math.abs(posBishop[1] - posPawn[1])
  );
}

function convertCoordinates(position) {
  const columns = "abcdefgh";
  const [col, row] = position.split("");
  return [columns.indexOf(col), parseInt(row, 10) - 1];
}

console.log(bishopAndPawn("a1", "c3"));
