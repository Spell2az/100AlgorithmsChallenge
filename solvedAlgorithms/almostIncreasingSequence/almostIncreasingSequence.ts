function almostIncreasingSequence(sequence) {
  const culprit = getTheCulpritIndex(sequence)

  if (culprit === -1 && isIncreasing(sequence)) return true

  return isIncreasing(sequence.filter((_, idx) => idx !== culprit))
}

function isIncreasing(seq) {
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) return false;
  }
  return true
}

function getTheCulpritIndex(seq) {

  if (seq[0] >= seq[1]) return 0
  if (seq[seq.length - 1] <= seq[seq.length - 2]) return seq.length - 1
  for (let i = 1; i < seq.length; i++) {
    if (seq[i - 1] <= seq[i] && seq[i] >= seq[i + 1] && seq[i - 1] < seq[i + 1]) return i;
    if (seq[i - 1] >= seq[i] && seq[i] <= seq[i + 1] && seq[i - 1] < seq[i + 1]) return i;
  }

  return -1
}


console.log(almostIncreasingSequence([1, 3, 2, 1])) //false
console.log(almostIncreasingSequence([1, 3, 2])) // true
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6])) // true
