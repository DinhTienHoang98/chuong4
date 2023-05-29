// Bài 2: Viết chương trình (có sử dụng hàm) giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp).

function GiaiPTb2(a, b, c) {
    if (a == 0 && b == 0 && c == 0) {
        console.log('Pt có vô số nghiệm');
    } else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log('Pt vô nghiệm');
        } else if (delta == 0) {
            var x = -b / (2 * a);
            console.log('Pt có nghiệm kép là: ' + x);
        } else {
            var x1 = (-b - Math.sqrt(delta)) / (2 * a);
            var x2 = (-b + Math.sqrt(delta)) / (2 * a);
            console.log('Pt có 2 nghiệm là: ' + x1, x2);
        }
    }
}
var a = prompt('nhập a');
var b = prompt('nhập b');
var c = prompt('nhập c');
GiaiPTb2(a, b, c);