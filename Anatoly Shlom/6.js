/*
6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.

Example:

largest(2, 0.1, -5, 100, 3) // 100
smallest(2, 0.1, -5, 100, 3) // -5 */

function smallest() {
    return Math.min.apply(this,arguments)
}
console.log(smallest(2, 0.1, -5, 100, 3));

function largest() {
    return Math.max.apply(this,arguments)
}
console.log(largest(2, 0.1, -5, 100, 3));
