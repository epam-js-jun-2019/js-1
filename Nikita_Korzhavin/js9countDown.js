function countDown(num) {
  function time(i) {
    setTimeout(function() {
      console.log(i);
    }, 1000 * (num - i));
  }
  for (var i = num; i >= 0; i--) {
    time.bind(null)(i);
  }
}

countDown(3); // 3 2 1 0
