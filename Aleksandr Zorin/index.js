function splitAndMerge(str, sp) {
    var words = str.split(' ');
    var newWords = [];
    words.forEach(function (word) {
        newWords.push(word.split('').join(sp))
    });
    return newWords.join(' ');
}

function convert(object) {
    var arr = []
    for (const key in object) {
        arr.push([key, object[key]]);
    }
    return arr;
}

function toCamelCase(str) {
    var splitString = str.split('-');
    var newString = [];
    if (splitString.length == 1) {
        splitString = str.split('_');
    }
    for (var i = 0; i < splitString.length; i++) {
        if (i == 0) {
            newString.push(splitString[i])
        } else {
            newString.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
        }
    }
    return newString.join('');
}

function reverse(str) {
    var words = str.split(' ');
    var newString = [];
    words.forEach(function (word) {
        newString.push(word.split('').reverse().join(''));
    });
    return newString.join(' ');
}

function stringExpansion(str) {
    var sets = str.match(/(\d{1}\D{1})|\D/g)
    var newString = [];
    if (!sets || sets.length == 0) {
        return str;
    }
    sets.forEach(function (set) {
        if (set.length == 1) {
            newString.push(set);
        } else {
            for (var i = 0; i < set[0]; i++) {
                newString.push(set[1]);
            }
        }
    });
    return newString.join('');
}

function largest() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        max = max > arguments[i] ? max : arguments[i];
    }
    return max;
}

function smallest() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        min = min < arguments[i] ? min : arguments[i];
    }
    return min;
}

function transform(arr) {
    var functions = [];
    function getFunction(arg) {
        var value = arg;
        return function () { return value };
    }
    arr.forEach(function (arg) {
        functions.push(getFunction(arg));
    });

    return functions;
}

function sum() {
    return arguments.length == 0 ? 0 : arguments[0] + sum.apply(null, Array.prototype.slice.call(arguments, 1));
}

function countDown(i) {
    setTimeout(function () {
        if (i >= 0) {
            console.log(i);
            countDown(--i);
        }
    }, 1000)
}

Function.prototype.myBind = function () {
    var primaryFunc = this;
    var context = arguments[0];
    var primaryArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
        var args = primaryArgs.concat(Array.prototype.slice.call(arguments));
        return primaryFunc.apply(context,args);
    }
}