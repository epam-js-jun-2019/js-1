function reverseWords (str) {
  
  var res = [];
  
  var arr = str.split(" ").forEach(function (elem){
    
      res += elem.split('').reverse().join("") + " ";
  });

  return res.trim();

}

// var str = "Ice-cream is very tasty!";

// console.log(reverseWords(str));
  


