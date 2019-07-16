function convert(obj) {
  return Object.keys(obj).map(function(key) {
    return [key, obj[key]];
  });
}
/*
const guy = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
console.log(convert(guy));
*/
