/*     convert       */
function convert(obj){
    var objKeys = Object.keys(obj);
    const res = objKeys.map(function(value){
        return [value, obj[value]];
    })
    console.log(res);
}
obj1 = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(convert(obj1));