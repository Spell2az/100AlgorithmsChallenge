function htmlEndTagByStartTag(startTag: string): string {
  return `</${startTag.match(/[a-z]+/g)[0]}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));