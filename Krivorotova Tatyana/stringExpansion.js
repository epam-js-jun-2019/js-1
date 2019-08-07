/*       stringExpansion       */
function stringExpansion(str){
    return str.match(/\d?[A-Za-z]/ig).reduce(function(acc, currItem){
            if(!parseInt(currItem))
            {
                acc.push(currItem);
            }
            acc.push(currItem[currItem.length-1].repeat(parseInt(currItem)));
            return acc;
    }, []).join('');
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));