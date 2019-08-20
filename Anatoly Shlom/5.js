/*5) Write a function stringExpansion

Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurance of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
stringExpansion('3D2a5d2f') === 'DDDaadddddff'
If there are two consecutive numeric characters the first one is ignored.
stringExpansion('3d332f2a') === 'dddffaa'
If there are two consecutive alphabetic characters then the first character has no effect on the one after it.
stringExpansion('abcde') === 'abcde'
Your code should be able to work for both lower and capital case letters.*/

function stringExpansion(str) {
    arr=str.split('');          
    var mul=1;
    var target=[];
    for (var i=0; i<arr.length; i++) {
        if (!isNaN(Number(arr[i]))) {
            mul=arr[i];
        } 
        if (isNaN(Number(arr[i]))) {
            for (n=0; n<mul; n++) {
                target.push(arr[i]);
            }
            mul=1;
        }
    }
    return target.join('');
}

console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("3d332f2a"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion("abc3D4e"));




