// get 3 random numbers
function randomNums(n, min, max) {
    var arr = [];
    for (i = 0; i < n; i++) {
        var ran = Math.ceil(Math.random() * (max - min) + min);
        while (isExist(arr, ran)) {
            ran = Math.ceil(Math.random() * (max - min) + min);
        }
        arr[i] = ran;
    }
    return arr;
}

function isExist(arr, ran) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ran) {
            return true;
        }
    }
    return false;
}