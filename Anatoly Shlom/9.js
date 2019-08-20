/*9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.

Example:

countDown(3); // 3 2 1 0*/
function countDown(num) {
    var counter=setInterval(function () {
        console.log(num);
        num = num-1;
        if (num<0) {
            clearInterval(counter);
        }        
    }, 1000);
}
countDown(3);
