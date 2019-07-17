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