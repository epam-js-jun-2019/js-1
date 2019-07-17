"use strict"

// FUNCTION 1: returns phrase with determined separator (via reduce)

function splitAndMerge (str, sp) {

    //separate phrase into words
    var arrOfWords = str.split(" ");

    var arrOfLetters = arrOfWords.map(function(word) {

        //separate words into letters
        var letters = word.split("");

        //add new separator between letters
        return letters.reduce(function(acc, letter) {
            return acc + sp + letter;
        });
    });

    //add new separator between words
    return arrOfLetters.reduce(function(acc, word) {
        return acc + sp + word;
    });
}

console.log("FUNCTION 1 (via reduce):               " + splitAndMerge("Hello World!", ","));

// FUNCTION 1: returns phrase with determined separator (via join)

function splitAndMerge1 (str, sp) {

    //separate phrase into words
    var arrOfWords = str.split(" ");

    var arrOfLetters = arrOfWords.map(function(word) {

        //separate words into letters
        var letters = word.split("");

        //add new separator between letters
        return letters.join(sp);
    });

    //add new separator between words
    return arrOfLetters.join(sp);
}

console.log("FUNCTION 1 (via join):                 " + splitAndMerge1("My name is John", " "));


// FUNCTION 2: convertation hash to array (via entries)

function convert (hash) {
    return Object.entries(hash);
}

var obj = {name: 'Jeremy', age: 24, role: 'Software Engineer'};

console.log("FUNCTION 2 (via entries):              " + convert(obj));


// FUNCTION 2: convertation hash to array (via keys and map)

function convert1 (hash) {
    var arrOfKeys = Object.keys(hash);
    
    return arrOfKeys.map(function(key) {
        return [key, hash[key]];
    });
}

var obj1 = {name: 'Jeremy', age: 24, role: 'Software Engineer'};

console.log("FUNCTION 2 (via keys and map):         " + convert1(obj1));


// FUNCTION 3: convertation dash/underscore string to camelCase

function camelCase (str) {

    var sep;

    // check what kind of separator sring has

    str.search('-')>0 ? sep = '-' : sep = '_';

    var arr = str.split(sep).map(function(word, ind) {

        if (ind!=0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } 
        
        return word;
    });

    return arr.join('');
}

console.log("FUNCTION 3:                            " + camelCase("the-stealth-warrior"));


// FUNCTION 4: reverse each word in sentence

function reverse (sentence) {
    var splitSentence = sentence.split(" ");
    return splitSentence.map(function(word){
        return word.split("").reverse().join("");
    }).join(" ");
}

console.log("FUNCTION 4:                            " + reverse(" A fun little challenge! "));


// FUNCTION 5: the expansion of the string

function stringExpansion(string) {

    var repeatSimbol = 1;

    return string.split("").reduce(function(acc,simbol,ind,arr) {

        // if the simbol is number

        if (isNaN(simbol)==false) {

            repeatSimbol = +simbol;

        // if the simbol is letter

        } else {

            for (var i = 0; i < repeatSimbol; i++) {
                acc = acc + simbol;
            }

            repeatSimbol = 1;

            return acc;
        }

        return acc;

    },"");

}

console.log("FUNCTION 5:                            " + stringExpansion("a0bcd4gh"));


// FUNCTION 6: largest and smallest number

function largest () {

    function compareNumbers(a, b) {
        return b - a;
      }

    var numbers=[];
    
    for (var i = 0; i < arguments.length; i++) {
        numbers[i] = arguments[i];
    }

    numbers = numbers.sort(compareNumbers);
    return numbers[0];
}

function smallest () {

    function compareNumbers(a, b) {
        return a - b;
      }

    var numbers=[];
    
    for (var i = 0; i < arguments.length; i++) {
        numbers[i] = arguments[i];
    }

    numbers = numbers.sort(compareNumbers);
    return numbers[0];
}

console.log("FUNCTION 6 (largest):                  " + largest(2, 0.1, 500, 100, -3)); //500
console.log("FUNCTION 6 (smallest):                 " + smallest(2, -0.1, -5, 700, -300)); //-300


// FUNCTION 7: transform array

function transform (arr) {
    
    return arr.map(function(elem) {
        return function() {
            return elem;
        }
    });

}

var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log("FUNCTION 7:                            " + newArray[3]()); // 40
console.log("FUNCTION 7:                            " + newArray[4]()); // 50


// FUNCTION 8: sum of numbers (without recursion)

function sum () {

    var sumOfArgs=0;

    for (var i=0; i<arguments.length; i++) {
        sumOfArgs += arguments[i];
    }

    return sumOfArgs;

}

console.log("FUNCTION 8 (without recursion):        " + sum(1,3,5,7));


// FUNCTION 8: sum of numbers (recursion)

function sum1 () {

    var i = arguments.length - 1;
    var newArguments=[];

    for (var i = 0; i < arguments.length - 1; i++){

        newArguments.push(arguments[i]);
        
    }

    if (newArguments.length > 0) {

        return arguments[i] + sum1.apply(null, newArguments);

    } else {

        return arguments[i];

    }

}

console.log("FUNCTION 8 (recursion):                " + sum1(1,3,5,7,9));


// FUNCTION 9: logs values with one second

function countDown (number) {

    var interval = number * 1000 + 1000;

    var count = setInterval(function(){

            console.log("FUNCTION 9:                            " + number);
            number--;
        
        }, 1000);

    return setTimeout(function () {

        clearInterval(count);

    }, interval);

}

countDown(2);


// FUNCTION 10: prototipe for bind()

Function.prototype.myBind = function (context) {
    var boundThis = this;
    return function () {
        return boundThis.apply(context, arguments)
    }
}

function addPropToNumber(number, number2) { return this.prop + number * number2; };
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(2, 7)); // 23