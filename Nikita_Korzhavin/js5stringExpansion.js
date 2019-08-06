function stringExpansion(str) {
  if (str === '') {
    return '';
  }
  return str
    .match(/^[a-z]+|\d+\w|[^\d]+/gi)
    .reduce(function(acc, curr) {
      if (!parseInt(curr)) {
        acc.push(curr);
      } else {
        acc.push(curr[curr.length - 1].repeat(parseInt(curr[curr.length - 2])));
      }
      return acc;
    }, [])
    .join('');
}
/*
console.log(stringExpansion('3D2a5d2f')); // 'DDDaadddddff'
console.log(stringExpansion('3d332f2a')); // 'dddffaa'
console.log(stringExpansion('abcde')); // 'abcde'
console.log(stringExpansion('ab2deee2ff'));
*/
