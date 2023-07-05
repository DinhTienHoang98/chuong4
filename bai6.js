// Bài 6: Viết hàm kiểm tra xem 1 số có phải là số nguyên tố không?
// // Số nguyên tố là số lớn hơn 2 và chỉ được chia hết cho chính nó
function soNguyenTo(a) {
    var isPrime = true;
    if (a <= 1) {
        alert('a phải lớn hơn 1');
    } else {
        for (var i = 2; i < a; i++) {
            if (a % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(a + ' Là số nguyên tố');
    } else {
        console.log(a + ' Không phải là số nguyên tố');
    }
}
var a = prompt('nhập a');
soNguyenTo(a);