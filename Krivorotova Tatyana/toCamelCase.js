/*    toCamelCase    */
function toCamelCase(str){
    str = str.split(/[-|_]/g);
    console.log(str);
    for(let i = 1; i < str.length; ++i){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    } 
    return str.join('');
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase('The_Stealth_Warrior'));