// Bài 1: Viết chương trình (có sử dụng hàm) giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).
function Giaiptb1(a,b) {
    var x = 0;
    if (a == 0 && b == 0) {
        console.log('Pt có vô số nghiệm');
    } else if (a == 0 && b !==0) {
        console.log('Pt không có nghiệm');
    } else {
        x = -b/a;
        console.log('Pt có nghiệm là: ' + x);
    }
}
var a = prompt('Nhap a');
var b = prompt('Nhap b');
Giaiptb1 (a,b);
