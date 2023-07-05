// hàm in ra dãy số
function inDaySo() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
inDaySo(1, 4, 3, 2, 4);
console.log('======================');
// Hàm tính tổng
function tinhTong() {
    sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}
console.log(tinhTong(2, 3, 4, 5, 8));
console.log('======================');
// hàm tính số nhỏ nhất
function timSoNhoNhat() {
    var min = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(timSoNhoNhat(2, 5, 4, -6, 3, -4));
console.log('======================');
// tính số lớn nhất
function soLonNhat() {
    var max = 0;
    for (var n of arguments) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}

