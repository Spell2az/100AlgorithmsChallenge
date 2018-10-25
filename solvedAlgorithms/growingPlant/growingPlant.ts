function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  let days = 0;
  let height = 0;
  while (height <= desiredHeight) {
    height += upSpeed
    days++
    if (height >= desiredHeight) {
      break;
    }

    height -= downSpeed;

  }
  return days;
}

console.log(growingPlant(100, 10, 910));