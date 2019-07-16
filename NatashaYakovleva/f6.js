//min value
function findMinNumb () {
  
  var min = Number.MAX_VALUE;
 
  for (let i=0; i<arguments.length; ++i){
   
    min = arguments[i] < min ? arguments[i] : min;  
  }
  return min;
}

//max value
function findMaxNumb () {
  
  var max = Number.MIN_VALUE;
 
  for (let i=0; i<arguments.length; ++i){
   
    max = arguments[i] > max ? arguments[i] : max;  
  }
  
  return max;
}

// console.log("Min: " + findMinNumb(1, 2, 4, 3, -1, 0));

// console.log("Max: " + findMaxNumb(1, 2, 4, 3, -1, 0));

