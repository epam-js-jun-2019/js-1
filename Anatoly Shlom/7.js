/*7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.

Example:

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3](); // should return 40
newArray[4](); // should return 50*/


function transform (arr) {
    return arr.map(function(target) {
        return function() {
            return target;
        }
    })
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50
