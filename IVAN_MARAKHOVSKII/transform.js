function transform(arr) {
  const result = arr.map((el) =>{
    return function(){
      return el
    }
  })
  return result;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]());
