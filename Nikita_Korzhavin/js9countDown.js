function countDown(num) {
  for (var i = num; i >= 0; i--) {
    function time(i) {
      setTimeout(function() {
        console.log(i);
      }, 1000 * (num - i));
    }
    var binded = time.bind(null, i);
    binded(i);
  }
}
/*
countDown(3); // 3 2 1 0
*/
