function toCamelCase(str) {
  return str
    .split(/-|_/)
    .map(function(word, index) {
      return index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    })
    .join('');
}
/*
console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
*/
