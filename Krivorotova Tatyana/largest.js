/*     largest     */
function largest()
{
    var tmp = arguments[0];
    for(var j = 0; j < arguments.length; ++j)
    {
       if(tmp < arguments[j])
       {
            tmp = arguments[j];
       }
    }
    return tmp;
}
console.log(largest(2, -5, 100, 3));