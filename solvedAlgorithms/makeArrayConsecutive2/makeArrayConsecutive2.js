function makeArrayConsecutive2(statues) {
    var max = Math.max.apply(Math, statues);
    var min = Math.min.apply(Math, statues);
    return (max - min) + 1 - statues.length;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
