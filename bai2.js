// Bài 2: Viết chương trình (có sử dụng hàm) giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp).
/*  a,b,c = 0 => Pt có vô số nghiệm
    ngược lại
    delta = b * b - 4 * a * c;
    - delta < 0 => PT vô nghiệm
    - delta = 0 => PT có nghiêm x = -b/(2*a)
    - delta > 0 => Pt có 2 nghiệm x1 = (-b - math.sqrt(delta)) / (2*a)
                                  x2 = (-b + math.sqrt(delta)) / (2*a)
*/
function ptBac2(a, b, c) {
    if (a === 0 && b === 0 && c === 0) {
        console.log('Pt có vô số nghiệm');
    } else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log('Pt vô nghiệm');
        } else if (delta === 0) {
            console.log('Pt có nghiệm x là: ' + -b / (2 * a));
        } else {
            var x1 = (-b - math.sqrt(delta)) / (2 * a);
            var x2 = (-b + math.sqrt(delta)) / (2 * a);
            console.log('Pt có 2 nghiệm là: ' + x1 + x2);
        }
    }
}
var num1 = Number(prompt('nhap a'));
var num2 = Number(prompt('nhap b'));
var num3 = Number(prompt('nhap c'));
ptBac2(num1, num2, num3);