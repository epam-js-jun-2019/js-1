//FUNCTION #1
function splitAndMerge(str, sp) {
    return str.split(" ").map(function(word) { return word.split("").join(sp) }).join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

//FUNCTION #2
function convert(obj) {
    return Object.entries(obj);
}

console.log(convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));

//FUNCTION #3
function toCamelCase(str) {
    var camel = '';
    arr = str.split(/[-_]/);
    camel = arr[0] + arr.splice(1).map(function(word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
    }).join('');
    return camel;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

//FUNCTION #4
function reverseWords(str) {
    return str.split(" ").map(function(word) {
        return word.split("")
    }).map(function(char) { return char.reverse().join("") }).join(" ");
}

console.log(reverseWords(" A fun little challenge! "));

//FUNCTION #5
function stringExpansion(str) {
    var result = "";
    str.split('').forEach(function(char, index, arr) {
        if (/\d/.test(char)) {
          if (/[a-z]/i.test(arr[index+1])) {
            result += arr[index+1].repeat(Number.parseInt(char) - 1);
          }
        }
        else {
          result += char;
        }
      });
    return result;
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));

//FUNCTION #6
function sortNumber(a, b) {
    return a - b;
}

function largest() {
    return Array.from(arguments).sort(sortNumber).reverse()[0];
}

function smallest() {
    return Array.from(arguments).sort(sortNumber)[0];

}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

//FUNCTION #7
function transform(baseArray) {
    return baseArray.map(function(value) {
        return function() {
            return value;
        }
    });
}

newArray = transform([10, 20, 30, 40, 50]);

console.log(newArray);
console.log(newArray[3]());
console.log(newArray[4]());

//FUNCTION #8
function sum() {
    var arr = Array.from(arguments);
    function rec(val) {
        if (val < 0) {
            return 0;
        }
        else {
            return arr[val] + rec(--val);
        }
    }
    return rec(arr.length-1);
}

console.log(sum(1, 3, 5, 7));

//FUNCTION #9
function countdown(n) {
    var timer = setInterval(function() {
         console.log(n--);
    }, 1000)

    setTimeout(function() {
        clearInterval(timer);
    }, (n+1)*1000)
}

countdown(3);



