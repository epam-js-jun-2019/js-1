
//FUNCTION #1
function splitAndMerge(str, sp) {
  return str.split(" ").map(function(word) { return word.split("").join(sp)}).join(" ");
 }

 console.log(splitAndMerge("My name is John", " "));
 console.log(splitAndMerge("Hello World!", ","));

 //FUNCTION #2
 


 //FUNCTION #3
 function toCamelCase(str) {
   var a = str.search("-");
    if ( a > 0) {
      sp = "-";
    }
    else {
       sp = "_";
    }
       
    return str[0] + str.split(sp).map(function(word) { 
      return word[0].toUpperCase() + word.substr(1);
    }).join("").substr(1);
 }

 console.log(toCamelCase("the-stealth-warrior"));
 console.log(toCamelCase("The_Stealth_Warrior"));

 //FUNCTION #4
 function reverseWords(str) {
   return str.split(" ").map(function(word) { 
     return word.split("")}).map(function(char) {return char.reverse().join("")}).join(" ");
 }

 console.log(reverseWords(" A fun little challenge! "));




 