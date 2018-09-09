function tasksTypes(deadlines, day) {
    return deadlines.reduce(function (acc, curr) {
        var taskIdx = 0;
        if (curr <= day) {
            taskIdx = 0;
        }
        else if (curr > day + 7) {
            taskIdx = 2;
        }
        else {
            taskIdx = 1;
        }
        acc[taskIdx] += 1;
        return acc;
    }, [0, 0, 0]);
}
console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
