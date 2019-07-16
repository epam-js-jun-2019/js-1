function convertToCamelCasing (str) {
  
  const STARTING_POSITION = 0;
  const FIRST_POSITION = 1;
  
  var res = str.split(/[_\-]/g);
  
  for(let i=1; i<res.length; ++i){
    
    res[i] = res[i].charAt(STARTING_POSITION).toUpperCase() + res[i].substr(FIRST_POSITION);
    
  }
 
  return res.join("");
  
}

// var str = "La-lolo_ka";
// var str = "la-lolo_ka";

// console.log(convertToCamelCasing(str));