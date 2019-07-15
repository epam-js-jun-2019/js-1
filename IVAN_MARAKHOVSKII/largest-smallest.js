function largest(){
    let max = arguments[0];
    for (let i = 1 ; i < arguments.length ; i++){
        if (arguments[i] > max ) max = arguments[i]
    }
    return max
}
function smallest(){
    let min = arguments[0];
    for (let i = 1 ; i < arguments.length ; i++){
        if (arguments[i] < min ) min = arguments[i]
    }
    return min
}