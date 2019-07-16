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
    index == arr.length - 1
      ? (newStr += word.split('').join(sp))
      : (newStr += word.split('').join(sp) + ' ');
  });
  return newStr;
}
