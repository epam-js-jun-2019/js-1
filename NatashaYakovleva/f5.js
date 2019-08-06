function stringExpansion(str){
  
  const DOES_NOT_MATCH = -1;
  
  if (str === "")
    return str;
  else {
    
    var crtArr = str.split('');
    var res = [];

    for (let i=0; i<crtArr.length; ++i){
      
      if (crtArr[i].search(/[a-zA-Z]/) != DOES_NOT_MATCH){
        res.push(crtArr[i]);
      }
        
      else if (crtArr[i].search(/[0-9]/) != DOES_NOT_MATCH) {
        
        if (i+1 == crtArr.length)
          break;
        
        if (crtArr[i+1].search(/[0-9]/) != DOES_NOT_MATCH)
          continue;
        
        if (crtArr[i+1].search(/[a-zA-Z]/) != DOES_NOT_MATCH) {
          
          for (let k=0; k<crtArr[i]; ++k)
            res.push(crtArr[i+1]);
          i++;
        }
      }
    }
    return res.join('');
  }
}

// var str = "r1s2T3r0i52J4";
// console.log(stringExpansion(str));

