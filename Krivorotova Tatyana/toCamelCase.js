/*    toCamelCase    */
function toCamelCase(str){
    var stringArr = str.split(/[-|_]/g);
    console.log(stringArr);
    for(let i = 1; i < stringArr.length; ++i){
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    } 
    return stringArr.join('');
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase('The_Stealth_Warrior'));