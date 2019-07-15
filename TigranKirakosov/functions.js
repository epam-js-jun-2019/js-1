// 1) splitAndMerge

function splitAndMerge(str, sp) {
  let acc = [];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      acc[i] = ' ';
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
