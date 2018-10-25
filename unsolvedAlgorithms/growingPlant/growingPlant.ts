function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  return growthDays(upSpeed-downSpeed, desiredHeight, 0, 0)
}

function growthDays(totalSpeed, desiredHeight, height, days) {
  if(desiredHeight <= height) return days;

  return growthDays(totalSpeed, desiredHeight, height + totalSpeed, days +1);
}

console.log(growingPlant(100, 10, 910))