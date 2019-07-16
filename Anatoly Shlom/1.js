/*1) Write a function splitAndMerge

Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.

Example:

splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!" */

function splitAndMerge (str, sp) {
    target=str.split(' ').join('').split('').join(sp);
    return target
}
console.log(splitAndMerge("Hello there!",","))
console.log(splitAndMerge("General Kenobi"," "))

