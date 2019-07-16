function sum(){
    if (!arguments.length){
        return 0
    }
    else {
        return arguments[0] + sum.apply(null,[].slice.call(arguments,1))
    }
}

console.log(sum(1,3,5,7))