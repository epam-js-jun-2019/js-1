function sumOfNumbs () {
  
  var arr = [];
  
  for (let i=0; i<arguments.length; ++i)
    arr.push(arguments[i]);
    
  return sum(arr, 0);

}


function sum(arr, i){
  
  var iteration = i;
  res = 0;

  if (iteration != arr.length){
    
    res = arr[iteration] + sum(arr, ++iteration);
  }
  
  return res;
 
}

// console.log(sumOfNumbs(-1, 2, 1, 10, 5));