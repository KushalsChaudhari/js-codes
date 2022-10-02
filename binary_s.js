var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var right = 8,
    n = 8, left = 0,
    mid = (right + left) / 2;
function binary_s(arr) {
    for (var i = 0; i < n; i++) {
        if (arr[mid] == key) {
            return mid;
        }
        else if (arr[mid] > key) {
            right = mid + 1;
        }
        else {
            left= mid -1;
        }
    }

    return 0;

}
var key=4;
var res = binary_s(arr, key);
if (res == 0) {
    console.log("not found");
}
else {
    console.log("found at index ", res);
}
