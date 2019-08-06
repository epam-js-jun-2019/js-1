function splitAndMerge (str, sp) {
  
  var res = [];
  
  var arr = str.split(' ').forEach(function(elem){
    
    res += elem.split('').join(sp) + " ";
  })
  
  return res.trim();
  
}

// var str = "Ice-cream is very tasty!";
// var sp = '_';

// console.log(splitAndMerge(str, sp));
