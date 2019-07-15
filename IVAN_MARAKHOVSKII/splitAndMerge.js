function splitAndMerge(str, spl) {
  const ans = str.split(" ");
  if (!ans[0]) {
    // return for space-only string
    return "";
  }
  ans.forEach(function(item, index) {
    ans[index] = item.split("").join(spl);
  });
  return ans.join(spl);
}

