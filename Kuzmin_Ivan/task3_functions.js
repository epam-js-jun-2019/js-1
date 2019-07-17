
// 1
/////////////////////////////////////////////////////////////
function splitAndMerge(str, sp) {
    var newStr = str.split(" ").join("").split("").join(sp);
    return newStr;
};

console.log(splitAndMerge("Hello World!", ","));
/////////////////////////////////////////////////////////////


// 2
/////////////////////////////////////////////////////////////
function convert(param) {
    var result = [];
    for (key in param) {
        result.push( [key, param[key]] );
    }
    return result;
};

var hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'}
console.log(convert(hash));
/////////////////////////////////////////////////////////////


// 3
/////////////////////////////////////////////////////////////
function toCamelCase(param) {
    var camel = param.replace(/\_/g,'-');
    camel = camel.split('-');
    for (i = 1; i < camel.length; i++) {
        camel[i] = camel[i][0].toUpperCase() + camel[i].slice(1);
    }
    camel = camel.join('');
    return camel;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
/////////////////////////////////////////////////////////////


// 4
/////////////////////////////////////////////////////////////
function reverseStr(param) {
    return param.split("").reverse().join("");
}

console.log(reverseStr(" A fun little challenge! "));
/////////////////////////////////////////////////////////////


// 5
/////////////////////////////////////////////////////////////
function stringExpansion(param) {
    var letters = param.match(/\d[A-za-z]+/g);
    return letters != null ? letters.map(elem => {
        return elem[1].repeat(elem[0]);
    }).join("") : param;
};

console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion("3d332f2a"));
/////////////////////////////////////////////////////////////

// 6
/////////////////////////////////////////////////////////////
function largest() {
	return Math.max(...arguments);
}

function smallest() {
	return Math.min(...arguments);
}

console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5
/////////////////////////////////////////////////////////////
