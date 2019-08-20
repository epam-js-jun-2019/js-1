/*3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Example:

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */

function toCamelCase(str) {
    target=str.split('');
    target.reduce(function(acc, cur, n, arr) {
        if (cur == '-' || cur == '_') {
            arr[n+1] = arr[n+1].toUpperCase();
            arr.splice(n,1);
            return acc;
        }
        return acc += cur;
    })
    return target.join('');
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
