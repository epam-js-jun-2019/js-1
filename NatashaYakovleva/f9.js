function countDown(numb){
  
  if (numb >= 0){
    console.log(numb);
    setInterval(countDown(--numb), 1);
  }

  // return;

}

var numb = 7;
countDown(numb);