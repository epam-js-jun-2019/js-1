
// FIRST FUNCTION
function splitAndMerge(str, sp) {
  return str.split(" ").map(function(b) { return b.split("").join(sp)}).join(" ");
 }

 console.log(splitAndMerge("My name is John", " "));
 console.log(splitAndMerge("Hello World!", ","));




 