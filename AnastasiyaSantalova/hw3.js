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


// FUNCTION 5: 

function stringExpansion(string) {

    return string.split("").reduce(function(acc,simbol) {
        //console.log(simbol);

        var repeatSimbol = 0;

        if (isNaN(simbol)==false) {

            repeatSimbol = simbol;

        } else {

            for (var i=1; i<repeatSimbol; i++) {
                acc = acc + simbol;
            }

            return acc;
        }

        return acc;

        // if ( isNaN(elem[ind])==false && isNaN(elem[ind+1]) && elem[ind]!=0 ) {

        //     for (var i=1; i<+elem[ind]; i++) {
        //         acc = acc + elem[ind+1];
        //     }

        //     return acc;

        // } else if (isNaN(elem[ind])) {

        //     return acc + elem[ind];

        // } else if (elem[ind]==0 && isNaN(elem[ind+1])) {

        //     //console.log(elem[ind]);

        //     elem[ind+1] = "";
        //     return acc;
            
        // } else {

        //     return acc;

        // }

    },"");

}

console.log("FUNCTION 5:                            " + stringExpansion("3a0bcd"));


// FUNCTION 5: the expansion of that string

function stringExpansion1(string) {
    
    var arr = [0,0,0,0,0,0,0,0,0];
    var countOfSimbols = 1;
    var start = 0;

    return string.split("").reduce(function(acc,simbol) {

        // if the simbol is number
        
        if (isNaN(simbol)==false) {

            countOfSimbols = simbol;

        } else {

            //console.log(arr);

            arr = arr.fill(simbol, start, start+countOfSimbols);
            start = start+countOfSimbols;
            
        }

        return arr;
    });

};

console.log("FUNCTION 5:                            " + stringExpansion1("3a0bcd"));


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

countDown(7);


// FUNCTION 10: 