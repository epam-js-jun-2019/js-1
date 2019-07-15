function toCamelCase(str){
    let sep;
    if (str.indexOf('-') !== -1){
        sep = '-'
    }else{
        sep = '_'
    }
    
    str = str.split(sep);
    for (let i = 1 ; i < str.length ; i ++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    }
    return str.join('');
}
