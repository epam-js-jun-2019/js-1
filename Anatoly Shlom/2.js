/*2) Write a function convert

Convert a hash into an array. Nothing more, Nothing less.
{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into
[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]*/

function convert(hash) {
    var values=[]
    for (value in hash) {
        values.push([value, hash[value]]);
    }    
    return values;
}
console.log(convert({name: 'Anatoly', age: 32, role: 'Wannabe front-end developerx'}));
