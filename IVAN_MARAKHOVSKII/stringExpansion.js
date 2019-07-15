function stringExpansion(str) {
  if (str == "") {
    return "";
  }


  let ans = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    // index on char and prev is a number
    if (i !== 0 && !+char && +str.charAt(i - 1)) {
      const number = +str.charAt(i - 1);
      
      for (let j = 0; j < number; j++) {
        ans += char;
      }
    }
    // index in char and prev is a char
    if (i !== 0 && !+char && !+str.charAt(i - 1)) {
      ans += char;
    }
    // first char
    if (!+char && i == 0) {
      ans += str.charAt(0);
    }
  }

  return ans;
}
