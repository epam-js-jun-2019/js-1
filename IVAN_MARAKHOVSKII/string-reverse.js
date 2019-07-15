function stringReverse(str){
    str = str.split(' ')
    for (let i = 0 ; i < str.length ; i++){
        str[i] = str[i].split('').reverse().join('')
    }
    return str.join(' ')
}