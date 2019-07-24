// function 1
function splitAndMerge_1(s, sep) {
    var ans = "";
    let arr = s.split(" ");
    for (i = 0; i < arr.length; i++) {
        let tmp = arr[i].split('');
        for (j = 0; j < tmp.length; j++) {
            ans = ans.concat(tmp[j]);
            if (j < tmp.length - 1) {
                ans = ans.concat(sep);
            }
        }
        if (i < arr.length - 1) {
            ans = ans.concat(' ');
        }
    }
    return ans;
}

function splitAndMerge_2(s, sep) {
    return s.split(" ").reduce(function(acc, currItem, i, a) {
        tmp = [...currItem].reduce(function(acc, currItem, i, a) {
            acc = acc.concat(currItem)
            if (i != a.length - 1) {
                acc = acc.concat(sep)
            }
            return acc;
        }, "")

        acc = acc.concat(tmp);
        if (i != a.length - 1) {
            acc = acc.concat(" ");
        }
        return acc;
    }, "");
}

function splitAndMerge_3(s, sep) {
    return s.split(" ").map(function(curr) {
        return [...curr].join(sep);
    }).join(" ");
}
//_____________________________________________________________________________________________________________________________
//function 2

function convert(d) {
    var a = []
    for (i in d) {
        a.push([i, d[i]])
    }
    return a;
}

//_____________________________________________________________________________________________________________________________
//fucntion 3

function toCamelCase(s) {
    var ans = "";
    var up = 0;
    for (i = 0; i < s.length; i++) {
        if ((s.charAt(i) == '-') || (s[i] == '_')) {
            up = 1;
        } else {
            if (up == 0) {
                ans = ans.concat(s.charAt(i));
            } else {
                ans = ans.concat(s.charAt(i).toUpperCase());
            }
            up = 0;
        }
    }
    return ans;
}

function toCamelCase(s) {
    return s.replace(/-/g, '_').split("_").map(function(cur, i) {
        if (i != 0) {
            return cur.charAt(0).toUpperCase() + cur.substring(1);
        } else {
            return cur;
        }
    }).join("");
}

//fucntion 4

function reverse_word(s) {
    return s.split(' ').map(function(cur) { return cur.split("").reverse().join("") }).join(" ");
}

//______________________________________________________________________________________________________________________________
//fucntion 5

function stringExpansion(s) {
    var ans = "";
    var t = 1;
    for (i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= '0'.charCodeAt(0) && s.charCodeAt(i) <= '9'.charCodeAt(0)) {
            t = s.charCodeAt(i) - '0'.charCodeAt(0);
        } else {
            for (j = 0; j < t; j++) {
                ans = ans.concat(s.charAt(i))
            }
            t = 1;
        }
    }
    return ans;
}


function stringExpansion(s) {
    var ans = "",
        t = 1;
    for (i = 0; i < s.length; i++) {
        if (/\d/.test(s.charAt(i))) {
            t = parseInt(s.charAt(i));
        } else {
            ans = ans.concat(s.charAt(i).repeat(t))
            t = 1;
        }
    }
    return ans;
}

//______________________________________________________________________________________________________________________________
//fucntion 6
function largest() {
    var ans = arguments[0]
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > ans) { // <
            ans = arguments[i]
        }
    }
    return ans;
}

function smallest(...args) {
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    return args.sort(compareNumeric)[0]; // args.length - 1
}

//_____________________________________________________________________________________________________________________________
//fucntion 7

function transform(a) {
    return a.map(function(cur) {
        return function() { return cur }
    })
}

//______________________________________________________________________________________________________________________________
//fucntion 8

function sum(...args) {
    if (args.length == 1) {
        return args[0]
    } else {
        return args[0] + sum.apply(null, args.slice(1))
    }
}

//______________________________________________________________________________________________________________________________
//fucntion 9

function countDown(n) {
    var t = n;
    for (i = 0; i <= n; i++) {
        setTimeout(function() { console.log(t--) }, i * 1000)
    }
}

//______________________________________________________________________________________________________________________________
//fucntion 10