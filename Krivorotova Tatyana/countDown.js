/*     countDown     */
function countDown(k)
{
    var i = k;
    const timerId = setInterval(function(){
        if(i == 0)
            clearInterval(timerId);
        console.log(i); i--;
    }, 1000)
}
countDown(3);