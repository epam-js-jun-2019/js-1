/*10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.

Hint: play with the function in Function.prototype and see what this points to inside it. Your code should look like: Function.prototype.myBind = function () { 
// your code here
}

Example:

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1) // 10*/

Function.prototype.myBind = function () { 
    var target = this;
    var args = arguments[0];
    curArgs = [].slice.call(arguments, 1);
    return function() {
        var newArgs = [].slice.call(arguments);
        targetArgs = curArgs.concat(newArgs);
        return target.apply(args, targetArgs);
    }
}

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));