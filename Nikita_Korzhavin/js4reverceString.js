function reverseString(sentence) {
  return sentence
    .split(' ')
    .map(function(word) {
      return word
        .split('')
        .reverse()
        .join('');
    })
    .join(' ');
}
/*
console.log(reverseString(' A fun little challenge! ')); //" A nuf elttil !egnellahc "
*/
