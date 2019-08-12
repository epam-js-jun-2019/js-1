function splitAndMerge(str, sp){
    let words=str.split(" ");
    let newWords=[];
    words.forEach(elem => {
        let characters=elem.split("")
        newWords.push(characters.join(sp))
    });
    return newWords.join(" ");
}

function convert(obj){
    let arr=[];
    for (elem in obj){
        arr.push([elem,obj[elem]])
    }
    return arr
}

function toCamelCase(str){
    let arr=str.split(/-|_/)
    let camelCaseStr=arr[0]
    for(let i=1; i<=arr.length-1; i++){
        camelCaseStr+=arr[i][0].toUpperCase()+arr[i].substr(1)
    }
    return camelCaseStr
}

function reverseWords(str){
    let arr=str.split(" ");
    let newStr=""
    arr.forEach(elem => {
            newStr+=elem.split("").reverse().join("")+" ";
    });
    return newStr.substr(0,newStr.length-1);
}

function stringExpansion(str){
    if(!str) return str
    let arr = str.split("")
    let newStr=""
    for (let i=0; i<arr.length-1; i++) {
        if(isNaN(arr[i])){
            newStr+=arr[i];
        }
        else if(isNaN(arr[i+1])){
            for(let j=1; j<arr[i]; j++){
                newStr+=arr[i+1]
            }
        }
    };
    if (isNaN(arr[arr.length-1])) newStr+=arr[arr.length-1]
    return newStr
}

function largest(){
    let max=arguments[0]
    for(let i=1; i<=arguments.length-1; i++){
        if (arguments[i]>max) max=arguments[i]
    }
    return max
}

function smallest(){
    let min=arguments[0]
    for(let i=1; i<=arguments.length-1; i++){
        if (arguments[i]<min) min=arguments[i]
    }
    return min
}

function transform(arr){
    let newArr=[]
    arr.forEach(elem=> {
        newArr.push(function (){return elem})
    });
    return newArr
}

function sum(){
    if(arguments.length!=0){
        return arguments[0]+sum.apply(null,[].slice.call(arguments,1))
    }
    else return 0
}

function countDown(num){
    for(let i=num; i>=0; i--){
        setTimeout(function(){console.log(i)},1000+(num-i)*1000)
    }
}

Function.prototype.myBind = function (context) { 
    let args=[].slice.call(arguments,1);
    let fun=this;
    return function()
    {
        let extraArgs=[].slice.call(arguments);
        args=args.concat(extraArgs);
        return fun.apply(context,args)

    }
}

