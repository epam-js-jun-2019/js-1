Function.prototype.myBind = function(context) {
  const f = this;
  let args = [].slice.call(arguments,1)
  return function() {
    args = args.concat([].slice.call(arguments))
    return f.apply(context, args);
  };
};

function test(a, b) {
  console.log(this);
  console.log(a + b);
}

const g = test.myBind("context",2);
g(3);

