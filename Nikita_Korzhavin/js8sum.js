function sum() {
  // превращаем arguments в нечто удобоваримое
  var nums = [];

  for (var i = 0; i < arguments.length; i++) {
    nums[i] = arguments[i];
  }

  var numsFlat = nums.reduce(function(acc, curr) {
    return acc.concat(curr);
  }, []);
  // сама рекурсия
  if (numsFlat.length === 1) {
    return numsFlat[0];
  }

  return numsFlat[0] + sum(numsFlat.slice(1));
}
/*
console.log(sum(1, 3, 5, 7)); //should return 16
*/
