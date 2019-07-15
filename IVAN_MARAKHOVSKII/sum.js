function sum(index){
    if (index == 0 ) {
        console.log(arguments)
        return arguments[0]
    }else{
        return arguments[index+1] + sum(index,...arguments)
    }
}

console.log(sum(1,3,5,7))