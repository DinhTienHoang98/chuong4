// Bài 5: Viết chương trình có sử dụng hàm để hoán đổi giá trị 2 biến

// function hoanDoi(a, b) {
//     var temp = a;
//     a = b;
//     b = temp;
//     return [a, b];
// }
// var x = prompt('nhap x');
// var y = prompt('nhap y');
// console.log("Trước khi hoán đổi: x =", x, "và y =", y);

// var swapped = hoanDoi(x, y);
// x = swapped[0];
// y = swapped[1];

// console.log("Sau khi hoán đổi: x =", x, "và y =", y);
//////////////////
function swap(x, y) {
    console.log('Trong ham: Truoc khi hoan doi: ', x, y);
    var t = x;
    x = y;
    y = t;
    console.log('Trong ham: Sau khi hoan doi: ', x, y);
}

var a = 3;
var b = 5;
console.log('Ngoai ham: Truoc khi hoan doi: ', a, b);
swap(a, b);
console.log('Ngoai ham: Sau khi hoan doi: ', a, b);
console.log('===============');
/////////
function doigt(a, b) {
    console.log('giá trị truoc khi đổi:', a, b);
    var t = a;
    a = b;
    b = t;
    console.log('giá trị sau khi đổi: ', a, b);
}
var a = prompt('nhap a');
var b = prompt('nhap b');
doigt(a, b);
