
// 1
/////////////////////////////////////////////////////////////
function splitAndMerge(str, sp) {
    var newStr = str.split(" ").join("").split([ ]).join(sp);
    return newStr;
};

console.log(splitAndMerge("Hello World!", ","));
/////////////////////////////////////////////////////////////


// 2
/////////////////////////////////////////////////////////////
function convert(obj) {
    return Object.entries(obj);
};

var hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'}
console.log(convert(hash));
/////////////////////////////////////////////////////////////


// 3
/////////////////////////////////////////////////////////////
function toCamelCase(param) {
    var camel = param.replace(/\_/g,'-');
    camel = camel.split(/[-]/);
    for (i = 1; i < camel.length; i++) {
        camel[i] = camel[i][0].toUpperCase() + camel[i].slice(1);
    }
    camel = camel.join('');
    return camel;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
/////////////////////////////////////////////////////////////


// 4
/////////////////////////////////////////////////////////////
function reverseStr(str) {
    return str.split(' ').map(function(word) {
        return word.split('').reverse().join('')
    }).join(' ');
}

console.log(reverseStr("Some new test words to reverse"))   
/////////////////////////////////////////////////////////////


// 5
/////////////////////////////////////////////////////////////
function stringExpansion(param) {
    var letters = param.match(/\d[A-za-z]+/g);
    return letters != null ? letters.map(function (elem) {
        return elem[1].repeat(elem[0]);
    }).join("") : param;
};

console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion("3d332f2a"));
/////////////////////////////////////////////////////////////

// 6
/////////////////////////////////////////////////////////////
function largest() {
    var argArray = Array.prototype.slice.call(arguments)
    var temp = argArray[0];
    for (var i = 0; i < argArray.length; i++) {
        if (temp < argArray[i]) {
            temp = argArray[i]
        }
    } return temp;
};

function smallest() {
    var argArray = Array.prototype.slice.call(arguments)
    var temp = argArray[0];
    for (var i = 0; i < argArray.length; i++) {
        if (temp > argArray[i]) {
            temp = argArray[i]
        }
    } return temp;
};

console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5
/////////////////////////////////////////////////////////////


// 7
/////////////////////////////////////////////////////////////
function transform(array) {
    return array.map(function (element) {
        return function() {
            return element;
        }
    })
};

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log(newArray[3]()); // 40
console.log(newArray[4]()); // 50
/////////////////////////////////////////////////////////////

// 8
/////////////////////////////////////////////////////////////
function sum(digits) {
    if (arguments.length === 1) {
        return digits;
    } else {
        return digits + sum.apply(null, [].slice.call(arguments,1));
    }
}

console.log(sum(1,3,5,7));
/////////////////////////////////////////////////////////////

// 9
/////////////////////////////////////////////////////////////
function countDown(number) {
    var counter = 1;
    for (var i = number + 1; i--;) {
        (function(j) {
            setTimeout(function() {
                console.log(j);
            }, 1000 * counter)
        })(i)
        counter++;
    }
}

countDown(3); // 3 2 1 0
/////////////////////////////////////////////////////////////

// 10
/////////////////////////////////////////////////////////////
Function.prototype.myBind = function (ctx) {
    var self = this,
    arg = [].slice.call(arguments),
    ctx = arg.shift();
        return function () {
            return self.apply(ctx, arg.concat([].slice.call(arguments)));
        };
};

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1)
/////////////////////////////////////////////////////////////

