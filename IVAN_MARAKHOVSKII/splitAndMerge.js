function splitAndMerge(str, spl) {
  const ans = str.split(" ");
  if (!ans[0]) { // check for space-only strings
    return ""; 
  }
  ans.forEach(function(item, index) {
    ans[index] = item.split("").join(spl);
  });

  return ans.join(spl);
}

console.log(splitAndMerge(" ", ","));
