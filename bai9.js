// Bài 9: Viết hàm kiểm tra xem 1 số có phải là số đối xứng không?
/*Hàm tìm số đảo ngược trong JavaScript*/
// function reverse_num(n) {
//     var sodao = 0;
//     var nRem;
//     nRem = n % 10;
//     sodao = (sodao * 10) + nRem;
//     n = n / 10;
//     // return sodao;
// }

// /*Ứng dụng Hàm tìm số đảo ngược để tạo Hàm kiểm tra số đối xứng trong JavaScript*/
// function symmetrical_num(n) {
//     // flag = 1 => số đối xứng
//     // flag = 0 => không phải số đối xứng

//     let flag = 0;
//     if (reverse_num(n) == n) flag = 1;
//     return flag;
// }

// let n = prompt(" Nhap so tu nhien= ");

// let check = symmetrical_num(n);

// if (check == 1) console.log(n + " la so doi xung");
// else console.log(n + " khong phai la la so doi xung");
//
function kiemTraSoDoiXung(number) {
    // Chuyển số thành chuỗi
    var numString = number.toString();
    // Đảo ngược chuỗi số
    var reverseString = numString.split('').reverse().join('');
    // Kiểm tra nếu chuỗi số ban đầu và chuỗi số đảo ngược giống nhau
    if (numString === reverseString) {
        return true;
    } else {
        return false;
    }
}
// Sử dụng hàm kiểm tra số đối xứng
let number = prompt(" Nhap so tu nhien: ");
var isPalindrome = kiemTraSoDoiXung(number);

if (isPalindrome) {
    console.log(number + ' là số đối xứng.');
} else {
    console.log(number + ' không phải là số đối xứng.');
}
