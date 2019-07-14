
// FIRST FUNCTION
function splitAndMerge(str, sp) {
  return str.split(" ").map(function(b) { return b.split("").join(sp)}).join(" ");
 }

 console.log(splitAndMerge("My name is John", " "));
 console.log(splitAndMerge("Hello World!", ","));

 //SECOND FUNCTION

 //FIRD FUNCTION

 //FOURTH FUNCTION
 function reverseWords(str) {
   return str.split(" ").map(function(a) { 
     return a.split("")}).map(function(c) {return c.reverse().join("")}).join(" ");
 }

 console.log(reverseWords(" A fun little challenge! "));




 