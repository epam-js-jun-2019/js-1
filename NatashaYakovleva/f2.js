function convert (obj) {
  
  var res = [];
 
  for (let item in obj){
    
    var crtArr = [];
    crtArr.push(item);
    crtArr.push(obj[item]);
    res.push(crtArr);
}
  return res;
}

var obj = {
  name: "Ivan",
  age: 5,
  homeTown: "Volgograd"
};

// console.log(convert(obj));