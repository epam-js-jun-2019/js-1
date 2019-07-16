Function.prototype.myBind = function(context) {
  const f = this;
  return function() {
    return f.apply(context, [].slice.call(arguments));
  };
};

function test(a, b) {
  console.log(this);
  console.log(a + b);
}

const g = test.myBind("context");
g(1, 2);

