function transform(arr) {
  
  var newArr = [];
  
  for (let i=0; i<arr.length; ++i){
    
    newArr.push(function() {console.log(arr[i])});
  }
  
  return newArr;
}

// var arr = [1, 2, 3, 4, 5];
// var newArr = transform(arr);

// for (let i=0; i< newArr.length; ++i){
//   newArr[i] ();
// }