Function.prototype.myBind = function(context) {
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  var emptyFunc = function() {};
  var currentThis = this;
  var boundFunction = function() {
    return currentThis.apply(
      this instanceof emptyFunc && context ? this : context,
      bindArgs.concat(Array.prototype.slice.call(arguments)),
    );
  };
  emptyFunc.prototype = currentThis.prototype;
  boundFunction.prototype = new emptyFunc();
  return boundFunction;
};

/*
function addPropToNumber(number) {
  return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10
*/
