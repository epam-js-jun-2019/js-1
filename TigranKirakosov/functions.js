'use strict'
// 1) splitAndMerge

//version 1
function splitAndMerge(str, sp) {
  var acc = [];
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
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
  var newStr = '';
  str.split(' ').forEach(function (word, index, arr) {
    index === arr.length - 1
      ? (newStr += word.split('').join(sp))
      : (newStr += word.split('').join(sp) + ' ');
  });
  return newStr;
}

//version 3
function splitAndMerge3(str, sp) {
  return str
    .split(' ')
    .map(function (word) { return word.split('').join(sp) })
    .join(' ');
}

// 2) hashToArr
function hashToArr(hash) {
  return Object.keys(hash).map(function (prop) {
    return [prop, hash[prop]]
  });
}

// 3) toCamelCase

// version 1
function toCamelCase(str) {
  var newStr = '';
  var acc;
  if (str.includes('-')) acc = str.split('-');
  else if (str.includes('_')) acc = str.split('_');
  else if (str.includes(' ')) acc = str.split(' ');
  else return str;
  acc.forEach(function (word, index) {
    if (index === 0) newStr += word;
    else if (word[0] !== undefined) {
      newStr += word[0].toUpperCase() + word.slice(1);
    }
  });
  return newStr;
}

//version 2
function toCamelCase2(str) {
  var sp;
  var re = /\-|\_| /;
  if (str.match(re)) {
    sp = re;
  }
  return str.split(sp).map(function (word, index) {
    if (index !== 0) {
      return word[0].toUpperCase() + word.slice(1)
    } else return word;
  }).join('');
}

// 4) wordReverser

// version 1
function wordReverser(str) {
  var newStr = '';
  str.split(' ').map(function (word, index, arr) {
    index === arr.length - 1
      ? (newStr += word.split('').reverse().join(''))
      : (newStr += word.split('').reverse().join('') + ' ');
  });
  return newStr;
}

// version 2
function wordReverser2(str) {
  return str
    .split(' ')
    .map(function (word) { return word.split('').reverse().join('') })
    .join(' ');
}

// 5) stringExpansion
function stringExpansion(str) {
  function strRepeat(str, num) {
    var repStr = '';
    while (num - 1 > 0) {
      repStr += str;
      num--;
    }
    return repStr;
  }
  var newStr = [];
  for (var i = 0; i < str.length; i++) {
    (+str[i] && !(+str[i + 1]) && str[i + 1])
      ? newStr[i] = strRepeat(str[i + 1], +str[i])
      : newStr[i] = str[i];
  }
  return newStr.filter(function (char) { return !(+char) && +char !== 0 }).join('');
}

// 6) largest/smallest
function largest() {
  var result = Array.prototype.slice.call(arguments).sort(function (a, b) { return a - b });
  return result[result.length - 1];
}

function smallest() {
  var result = Array.prototype.slice.call(arguments).sort(function (a, b) { return a - b });
  return result[0];
}

// 7) transform
function transform(arr) {
  return arr.map(function (item) {
    return function () {
      var value = item;
      return value;
    }
  });
}

// 8) sum

// non-recursive solution
function sum() {
  return Array.prototype.slice.call(arguments).reduce(function (sum, cur) {
    return sum + cur;
  }, 0);
}

// recursive solution
function sum2() {
  if (arguments.length === 0) return 0;
  var args = Array.prototype.slice.call(arguments);
  return args[0] + sum.apply(null, args.slice(1));
}

// 9) countDown
function countDown(value) {
  for (var i = 0, iter = value; iter >= 0; iter-- , i += 1000) {
    setTimeout(function () { console.log(value--) }, i);
  }
}

// 10) Function.prototype.myBind()
Function.prototype.myBind = function (newThis) {
  var target = this;
  var newArgs = Array.prototype.slice.call(arguments, 1);
  return function boundFunction() {
    var targetArgs = Array.prototype.slice.call(arguments);
    return target.apply(newThis, newArgs.concat(targetArgs));
  }
}