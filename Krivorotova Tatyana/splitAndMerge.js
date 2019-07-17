/*   splitAndMerge   */
function splitAndMerge(str, sp){
    let wrds = str.split(' ');
    const chars = [];
    for(let i = 0; i < wrds.length; ++i)
        chars.push(wrds[i].split('').join(sp));
    chars = chars.join(' ');
    console.log(chars);
}
console.log(splitAndMerge("Hello World!", ","));
console.log(splitAndMerge("My name is John"," "));