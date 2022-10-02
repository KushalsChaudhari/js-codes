var ary = [1, 2, 3, 4, 5, 6, 7, 8];
function ls(key, ary) {
    for (var i = 0; i < 8; i++) {
        if (key == ary[i]) {
            return i;
        }
    }
    return 0;
}


var key = 2;
var res = ls(key, ary);

// console.log();
if (res == 0) {
    console.log("not found");
}
else {
    console.log("found at index Array[", res, "]");
}