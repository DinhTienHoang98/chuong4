// Bài 1: Viết chương trình (có sử dụng hàm) giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).
/* có 3 th :
- a = 0 và b = 0 => Có vô số nghiệm
- a = 0 và b !0 => pt vô nghiệm
- còn lại : x = -b/a
*/
function ptBac1(a, b) {
    if (a === 0 && b === 0) {
        console.log('PT có vô số nghiệm')
    } else if (a === 0 && b !== 0) {
        console.log('PT vô nhgiệm');
    } else {
        console.log('PT có nghiệm x là: ' + -b / a);
    }
}
var num1 = Number(prompt('Nhập a'));
var num2 = Number(prompt('Nhập b'));
ptBac1(num1, num2);