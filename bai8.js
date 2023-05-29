// Bài 8: Viết hàm kiểm tra xem 1 số có phải là số fibonacci không?
function kiemTraSoFibonacci(n) {
    // Trường hợp đặc biệt: Số 0 và 1 đều là số Fibonacci
    if (n === 0 || n === 1) {
        return true;
    }
    var a = 0;
    var b = 1;

    // Tạo chuỗi Fibonacci cho đến khi giá trị thứ n trong chuỗi lớn hơn số cần kiểm tra
    while (b < n) {
        var temp = a;
        a = b;
        b = temp + b;
    }
    // Kiểm tra xem số cần kiểm tra có bằng giá trị Fibonacci cuối cùng không
    if (b === n) {
        return true;
    }
    return false;
}
var soCanKiemTra = Number(prompt('Nhập số cần kiểm tra: '));
if (kiemTraSoFibonacci(soCanKiemTra)) {
    console.log(soCanKiemTra + ' là số Fibonacci.');
} else {
    console.log(soCanKiemTra + ' không phải là số Fibonacci.');
}
