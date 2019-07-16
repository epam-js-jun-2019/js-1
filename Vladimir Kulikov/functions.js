/*
1) Write a function splitAndMerge
Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.

Example:
splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"
*/
function splitAndMerge(str, sp) {
    return str.split(' ').reduce(function (acc, word) {
        var newWord = word.split('').map(function (char, index) {
            return index === word.length - 1 ? char : char + sp;
        }).join('');

        acc.push(newWord);
        return acc;
    }, []).join(' ');
}

/* 
2) Write a function convert
Convert a hash into an array. Nothing more, Nothing less.
{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into
[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
*/
function convert(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
        acc.push([key, obj[key]]);
        return acc;
    }, []);
}

/*
3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
Example:
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/
function toCamelCase(str) {
    return str.split(/-|_/).map(function (word, index) {
        if (index === 0) {
            return word;
        }
        return word[0].toUpperCase() + word.slice(1);
    }).join('');
}

/*
4) Write a function that takes a sentence (string) and reverses each word in the sentence.
Example:
" A fun little challenge! " => " A nuf elttil !egnellahc "
*/
function reverseEachWord(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
}

/*
5) Write a function stringExpansion
Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurance of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
stringExpansion('3D2a5d2f') === 'DDDaadddddff'
If there are two consecutive numeric characters the first one is ignored.
stringExpansion('3d332f2a') === 'dddffaa'
If there are two consecutive alphabetic characters then the first character has no effect on the one after it.
stringExpansion('abcde') === 'abcde'
Your code should be able to work for both lower and capital case letters.
*/
function stringExpansion(str) {
    return str.split('').reduce(function (acc, item, index) {
        if (isNaN(Number(item))) {
            if (isNaN(Number(str[index - 1]))) {
                acc = acc + item;
            }
            acc = acc + item.repeat(str[index - 1]);
        }
        return acc;
    }, '');
}

/*
6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.
Example:
largest(2, 0.1, -5, 100, 3) // 100
smallest(2, 0.1, -5, 100, 3) // -5
*/
function largest() {
    var args = [].slice.call(arguments);
    return args.reduce(function (acc, num) {
        return acc = num > acc ? num : acc;
    }, '');
}
function smallest() {
    var args = [].slice.call(arguments);
    return args.reduce(function (acc, num) {
        return acc = num < acc ? num : acc;
    }, '');
}

/*
7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.
Example:
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3](); // should return 40
newArray[4](); // should return 50
*/
function transform(numbers) {
    return numbers.map(function (num) {
        return function () { return num };
    });
}

/*
8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.
Note: function should use recursion

Example:
sum(1,3,5,7); //should return 16
*/
function sum() {
    if (arguments.length === 0) return 0;
    var args = [].slice.call(arguments);
    return args[0] + sum.apply(null, args.slice(1));
}

/*
9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
Example:
countDown(3); // 3 2 1 0
*/
function countDown(seconds) {
if (seconds < 0) return;
    setTimeout(function () {
        console.log(seconds);
        countDown(seconds - 1);
    }, 1000);
};
