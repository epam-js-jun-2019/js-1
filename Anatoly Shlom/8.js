/*8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.

Note: function should use recursion

Example:

sum(1,3,5,7); //should return 16 */

function sum() {
    if (arguments.length === 0) {
        return 0;
    } else {
        return arguments[0] + sum.apply(0, Array.prototype.slice.call(arguments, 1));
    }
}
console.log(sum(1,3,5,7))
