function countDown(n) {
  for (var i = n; i >= 0; i--) {
    setTimeout(
      (function(local) {
        return function() {
          console.log(local);
        };
      })(i),
      1000 + (n - i) * 1000
    );
  }
}

countDown(10);
