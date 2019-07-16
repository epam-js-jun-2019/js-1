function splitAndMerge(str, sp) {
  return str
    .split(' ')
    .map(function(word) {
      return word.split('').join(sp);
    })
    .join(' ');
}

/*
console.log(splitAndMerge('My name is John', ' '));
console.log(splitAndMerge('Hello World!', ','));
*/
