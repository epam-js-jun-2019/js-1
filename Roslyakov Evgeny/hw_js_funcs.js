// ---------- 1 ---------- //

function splitAndMerge(str, sp) {
    return str.split(' ')
        .map(function(word) {
            return word.split('')
        })
        .map(function(newWord) {
            return newWord.join(sp)
        })
        .reduce(function(acc, cur) {
            return acc + ' ' + cur + ' ';
        })
        .trim();
}

console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));


// ---------- 2 ---------- //

function convert(hash) {
    var res = [];
    var temp = [];
    for(key in hash) {
        temp.push(key, hash[key]);
        res.push(temp);
        temp = [];
    }

    return res;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


// ---------- 3 ---------- //


function toCamelCase(str) {
    return str.split('')
        .reduce(function(acc, cur, i, arr) {
            if(cur === '-' || cur === '_') {
                arr[i+1] = arr[i+1].toUpperCase();
                return acc;
            }
            return acc += cur;
        })
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));


// ---------- 4 ---------- //

function reverse(str) {
    var temp = str.split('');
    var res = '';
    for (var i = temp.length - 1; i >= 0; i--) {
        res += temp[i];
    }
    return res;
}

console.log(reverse(" A fun little challenge! "));


// ---------- 5 ---------- //

function stringExpansion(str) {
    var temp = str.split('');
    return temp.reduce(function(acc, cur, i, arr) {
        if(Number.isInteger(+cur)) {
            if(Number.isInteger(+arr[i+1])) {
                return acc;
            }
            return acc += new Array(+cur).join(arr[i+1]);
        }
        return acc += cur;
    }, '')
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));