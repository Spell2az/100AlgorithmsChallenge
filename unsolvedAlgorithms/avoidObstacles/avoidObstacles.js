function avoidObstacles(inputArray) {
    var _loop_1 = function (i) {
        if (inputArray.every(function (el) { return el % i !== 0; })) {
            return { value: i };
        }
    };
    for (var i = 2;; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
console.log(avoidObstacles([5, 3, 6, 7, 9]));
