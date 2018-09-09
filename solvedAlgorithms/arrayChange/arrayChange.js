function arrayChange(inputArray) {
    var steps = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] === inputArray[i + 1]) {
            steps += 1;
            inputArray[i + 1] += 1;
        }
        else if (inputArray[i] > inputArray[i + 1]) {
            var increase = inputArray[i] - inputArray[i + 1] + 1;
            steps += increase;
            inputArray[i + 1] += increase;
        }
    }
    return steps;
}
console.log(arrayChange([1, 1, 1]));
