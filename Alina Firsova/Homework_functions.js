//______________________________FUNCTION 1_____________________________
function splitAndMerge(str, sep) {
    return console.log((str.split(/\s|/)).join(sep));
  }
  //______________________________FUNCTION 2_____________________________ 
  function convert(str) {
    return console.log(Object.entries(str))
  }
  //______________________________FUNCTION 3_____________________________ 
  function camelCase(str) {
    str = str.split(/-|_/);
    for (i = 1; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
    }
    return console.log(str.join(''))
  }
  //______________________________FUNCTION 4_____________________________  
  function reverceStr(str) {
    return console.log(str.split("").reverse().join(""));
  }
  //______________________________FUNCTION 5_____________________________  
  function stringExpansion(str) {
    var result = [];
    while (str.length) {
      letter = str.match(/[a-fA-F]/).index;
      if (!isNaN(str[letter - 1])) {
        result.push((str[letter]).repeat(str[letter - 1]));
      } else {
        result.push(str[letter])
      }
      str = str.slice(letter + 1);
    }
    return console.log(result.join(""));
  }
  //______________________________FUNCTION 6-1_____________________________ 
  function largest() {
    var args = Array.prototype.slice.call(arguments);
    max = args[0];
    var result = args.reduce(function(max, current) {
      if (max < current) {
        max = current;
      }
      return max;
    })
    return console.log(result);
  }
  //______________________________FUNCTION 6-2_____________________________  
  function smallest() {
    var args = Array.prototype.slice.call(arguments);
    min = args[0];
    var result = args.reduce(function(max, current) {
      if (min > current) {
        min = current;
      }
      return min;
    })
    return console.log(result);
  }
  //______________________________FUNCTION 7_____________________________  
  function transform(array) {
    return array.map(function(element) {
      return function() {
        return console.log(element);
      }
    })
  
  }
  //______________________________FUNCTION 8_____________________________ 
  function sum() {
    if (arguments.length === 1) return arguments[0];
    else {
      var args = Array.prototype.slice.call(arguments);
      return args[0] + sum.apply(null, args.splice(1));
    }
  }
  //______________________________FUNCTION 9_____________________________   
  function countDown(value) {
    var interval = setInterval(function() {
      if (value === -1) { clearInterval(interval); } else {
        console.log(value);
        value--;
      }
    }, 1000);
  }
  
  //______________________________FUNCTION 10_____________________________
  Function.prototype.myBind = function() {
    func = this;
    context = arguments[0];
    args = [].slice.call(arguments, 1);
    return function() {
      func_args = [].slice.call(arguments);
      args = args.concat(func_args);
      return func.apply(context, args);
    }
  }
  
  function addPropToNumber(number) {
    return this.prop + number
  }
  
  
  splitAndMerge("My name is John", " ");
  convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' });
  camelCase("The_stealth-warrior");
  reverceStr("A fun little challenge!");
  stringExpansion("3D2a5d2f");
  largest(5, 2, -100, 9, 0, 56, 4);
  smallest(5, 2, -100, 9, 0, 56, 4);
  transform([10, 20, 30, 40, 50]);
  const baseArray = [10, 20, 30, 40, 50];
  const newArray = transform(baseArray);
  newArray[3]();
  console.log(sum(5, 7, 9, 4, 17));
  countDown(6);
  var bound = addPropToNumber.myBind({ prop: 9 });
  bound(1);