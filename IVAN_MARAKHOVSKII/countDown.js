function countDown(n) {
  for (let i = n; i >= 0; i--) {
    setTimeout(function() {
      console.log(i);
    }, 1000 + (n - i) * 1000);
  }
}

countDown(10);
