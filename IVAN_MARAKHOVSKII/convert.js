function convert(hash) {
  const keys = Object.keys(hash);
  const result = []
  for (let i = 0; i < keys.length; i++) {
    result.push([keys[i],hash[keys[i]]]);
  }
  return result;

}
