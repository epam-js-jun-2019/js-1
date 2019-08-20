/*4) Write a function that takes a sentence (string) and reverses each word in the sentence.

Example:

" A fun little challenge! " => " A nuf elttil !egnellahc "*/

function reveresestring(str) {
        return str.split("").reverse().join("").split(" ").reverse().join(" ");
    }
console.log(reveresestring(" A fun little challenge! "));
