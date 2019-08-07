/*   reverseString   */
function reverseString(str){
    var stringArr = str.split(' ');
    stringArr = stringArr.map(function(value){
        return value.split('').reverse().join('');
    })
    stringArr = stringArr.join(' ');
    console.log(stringArr);
}
console.log(reverseString(" A fun little challenge! "));