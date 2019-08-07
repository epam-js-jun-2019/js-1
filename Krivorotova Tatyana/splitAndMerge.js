/*   splitAndMerge   */
function splitAndMerge(str, sp){
    var wrds = str.split(' ');
    var modifiedWrds = [];
    for(let i = 0; i < wrds.length; ++i)
    {
        modifiedWrds.push(wrds[i].split('').join(sp));
    }
    modifiedWrds = modifiedWrds.join(' ');
    console.log(modifiedWrds);
}
console.log(splitAndMerge("Hello World!", ","));
console.log(splitAndMerge("My name is John"," "));