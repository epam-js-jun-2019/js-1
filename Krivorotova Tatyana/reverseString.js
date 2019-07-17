/*   reverseString   */
function reverseString(str){
    str = str.split(' ');
    str = str.map(function(value){
        return value.split('').reverse().join('');
    })
    str = str.join(' ');
    console.log(str);
}
console.log(reverseString(" A fun little challenge! "));