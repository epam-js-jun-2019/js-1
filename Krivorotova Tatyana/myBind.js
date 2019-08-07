/*       myBind        */
Function.prototype.myBind = function(context){
    var myArguments = Array.prototype.slice.call(arguments, 1),
    mybound = this;
    return function(){
        var myBoundArguments = Array.prototype.slice.call(arguments);
        return mybound.apply(context, myBoundArguments)
    }
}

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1)