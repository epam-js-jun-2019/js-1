Function.prototype.myBind = function (context){
  
	const func = this;
	
	return function() {
	  
	  var arr = [].slice.call(arguments);
	  
		return func.apply(context, arr);
	}

}

function addPropToNumber(number) { return this.prop + number; }

var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(5)); 

