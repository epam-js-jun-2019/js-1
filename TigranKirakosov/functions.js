// 1) splitAndMerge

//version 1
function splitAndMerge(str, sp) {
  let acc = [];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      acc[i] = str[i];
    } else {
      if (str[i + 1] === ' ' || i === str.length - 1) {
        acc[i] = str[i];
      } else {
        acc[i] = str[i] + sp;
      }
    }
    newStr += acc[i];
  }
  return newStr;
}

//version 2
function splitAndMerge2(str, sp) {
  let newStr = '';
  str.split(' ').forEach((word, index, arr) => {
    index === arr.length - 1
      ? (newStr += word.split('').join(sp))
      : (newStr += word.split('').join(sp) + ' ');
  });
  return newStr;
}

// 2) hashToArr
function hashToArr(hash) {
  return Object.keys(hash).map(prop => [prop, hash[prop]]);
}

// 3) toCamelCase
function toCamelCase(str) {
  let newStr = '';
  let acc;
  if (str.includes('-')) acc = str.split('-');
  else if (str.includes('_')) acc = str.split('_');
  else if (str.includes(' ')) acc = str.split(' ');
  else return str;
  acc
    .map((word, index) => {
      if (index === 0) newStr += word;
      else if (word[0] !== undefined) {
        newStr += word[0].toUpperCase() + word.slice(1);
      }
    })
    .join('');
  return newStr;
}

// 4) wordReverser
function wordReverser(str) {
  let newStr = '';
  str.split(' ').map((word, index, arr) => {
    index === arr.length - 1
      ? (newStr += word.split('').reverse().join(''))
      : (newStr += word.split('').reverse().join('') + ' ');
  });
  return newStr;
}
