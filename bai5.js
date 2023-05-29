// Bài 5: Viết chương trình có sử dụng hàm để hoán đổi giá trị 2 biến

function hoanDoi(a, b) {
    var temp = a;
    a = b;
    b = temp;
    return [a, b];
}
var x = prompt('nhap x');
var y = prompt('nhap y');
console.log("Trước khi hoán đổi: x =", x, "và y =", y);

var swapped = hoanDoi(x, y);
x = swapped[0];
y = swapped[1];

console.log("Sau khi hoán đổi: x =", x, "và y =", y);
