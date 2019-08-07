/*   splitAndMerge   */
function splitAndMerge(str, sp){
    let wrds = str.split(' '); //Dividing sentence into words
    const chars = [];
    for(let i = 0; i < wrds.length; ++i)
        chars.push(wrds[i].split('').join(sp)); //Dividing words into chars
    chars = chars.join(' ');
    console.log(chars);
}
console.log(splitAndMerge("Hello World!", ","));
console.log(splitAndMerge("My name is John"," "));
/*     convert       */
function convert(obj){
    let objKeys = Object.keys(obj);
    const res = objKeys.map(function(value){
        return [value, obj[value]];
    })
    console.log(res);
}
obj1 = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(convert(obj1));
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
/*  stringExpansion  */
/*      largest      */
function largest(arr)
{
    let numbers = [];
    for(let i = 0; i < arguments.length; ++i)
    {
        numbers[i] = arguments[i];
    }
    let tmp = numbers[0];
    for(let j = 0; j < numbers.length; ++j)
    {
       if(tmp < numbers[j])
          tmp = numbers[j];
    }
    return tmp;
}
console.log(largest(2, -5, 100, 3));
/*     smallest      */
function smallest(arr)
{
    let numbers = [];
    for(let i = 0; i < arguments.length; ++i)
        numbers[i] = arguments[i];
    let tmp = numbers[0];
    for(let j = 0; j < numbers.length; ++j)
    {
       if(tmp > numbers[j])
          tmp = numbers[j];
    }
    return tmp;
}
console.log(smallest(2, -5, 100, 3));
/*     transform     */
function transform(arr){
    return arr.map(function(value){
        return function(){
            return value;
        }
    })
}
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3]();
newArray[4]();
/*       sum        */
function sum()
{
    return arguments.length === 0? 0 : arguments[0] + sum.apply(0, Array.prototype.slice.call(arguments, 1));
}
console.log(sum(2, -5, 100, 3));
/*     countDown     */
function countDown(k)
{
    let i = k;
    let timerId = setInterval(function(){
        if(i == 0)
            clearInterval(timerId);
        console.log(i); i--;
    }, 1000)
}
countDown(3);
/*      myBind       */