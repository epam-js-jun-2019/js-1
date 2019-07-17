/*       sum        */
function sum()
{
    return arguments.length === 0? 0 : arguments[0] + sum.apply(0, Array.prototype.slice.call(arguments, 1));
}
console.log(sum(2, -5, 100, 3));