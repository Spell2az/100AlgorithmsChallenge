function bishopAndPawn(bishop, pawn) {
    return (Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) ==
        Math.abs(bishop[1] - pawn[1]));
}
console.log(bishopAndPawn("a1", "c3"));
