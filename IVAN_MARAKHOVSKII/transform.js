function transform(arr) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    arr[i] = function() {
      return value;
    };
  }
  return arr;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]());
