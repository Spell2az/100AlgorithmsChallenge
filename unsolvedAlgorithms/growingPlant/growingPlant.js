function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var days = 0;
    var height = 0;
    while (height <= desiredHeight) {
        height += upSpeed;
        days++;
        if (height >= desiredHeight) {
            break;
        }
        height -= downSpeed;
    }
    return days;
}
console.log(growingPlant(100, 10, 910));
