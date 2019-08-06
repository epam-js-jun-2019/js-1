function transform(arr) {
  return arr.map(function(num) {
    return function() {
      return num;
    };
  });
}
/*
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

console.log(newArray[3]());
console.log(newArray[4]());
*/
