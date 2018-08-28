function addBorder(picture) {
    const topBottomEdges = '*'.repeat(picture[0].length + 2)
  
    return [topBottomEdges, ...picture.map(str => `*${str}*`), topBottomEdges]
}
console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["a"]));

