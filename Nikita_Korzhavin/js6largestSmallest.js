function largest() {
  var nums = [];
  for (var i = 0; i < arguments.length; i++) {
    nums[i] = arguments[i];
  }
  return nums.reduce(function(acc, curr) {
    return curr > acc ? curr : acc;
  }, nums[0]);
}

function smallest() {
  var nums = [];
  for (var i = 0; i < arguments.length; i++) {
    nums[i] = arguments[i];
  }
  return nums.reduce(function(acc, curr) {
    return curr < acc ? curr : acc;
  }, nums[0]);
}
/*
console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5
*/
