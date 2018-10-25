function companyBotStrategy(trainingData) {
    var _a = trainingData.reduce(function (acc, _a) {
        var time = _a[0], isCorrect = _a[1];
        if (isCorrect === 1) {
            if (acc.length > 0) {
                acc[0] += time;
                acc[1] += 1;
            }
            else {
                acc = [time, isCorrect];
            }
        }
        return acc;
    }, [0, 0]), totalTime = _a[0], correctCount = _a[1];
    return correctCount === 0 ? 0.0 : totalTime / correctCount;
}
console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
