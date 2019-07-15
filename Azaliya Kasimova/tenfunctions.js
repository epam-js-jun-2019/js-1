//FUNCTION #1
function splitAndMerge(str, sp) {
    return str.split(" ").map(function(word) { return word.split("").join(sp) }).join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

//FUNCTION #2
function convert(obj) {
    return Object.keys(obj).map(function(clue) { return [clue, obj[clue]]; })
}

console.log(convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));

//FUNCTION #3
function toCamelCase(str) {
    var a = str.search("-");
    if (a > 0) {
        sp = "-";
    } else {
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
        return word.split("")
    }).map(function(char) { return char.reverse().join("") }).join(" ");
}

console.log(reverseWords(" A fun little challenge! "));

//FUNCTION #5
/*function stringExpansion(str) {
  return 
}

console.log('3D2a5d2f');
console.log('3d332f2a');
console.log('abcde');*/

//FUNCTION #6
function sortNumber(a, b) {
    return a - b;
}

function largest() {
    return Array.from(arguments).sort(sortNumber).reverse()[0];
}

function smallest() {
    return Array.from(arguments).sort(sortNumber)[0];

}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

//FUNCTION #9
function countdown(n) {
    var timer = setInterval(function() {
         console.log(n--);
    }, 1000)

    setTimeout(function() {
        clearInterval(timer);
    }, (n+1)*1000)
}

countdown(3);