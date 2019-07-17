/*     transform     */
function transform(arr){
    return arr.map(function(value){
        return function(){
            return value;
        }
    })
}
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3]();
newArray[4]();