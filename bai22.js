function giaiPTB2(a, b, c) {
    if (a === 0) {
        giaiPTB1(b, c); // Gọi hàm giải phương trình bậc 1
    } else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        } else if (delta === 0) {
            var x = -b / (2 * a);
            console.log("Phương trình có nghiệm kép x = " + x.toFixed(2));
        } else {
            var x1 = (-b - Math.sqrt(delta)) / (2 * a);
            var x2 = (-b + Math.sqrt(delta)) / (2 * a);
            console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2));
        }
    }
}

function giaiPTB1(a, b) {
    if (a === 0 && b === 0) {
        console.log("Phương trình vô số nghiệm");
    } else if (a === 0 && b !== 0) {
        console.log("Phương trình vô nghiệm");
    } else {
        var x = -b / a;
        console.log("Phương trình có nghiệm x = " + x.toFixed(2));
    }
}

var a = Number(prompt("Nhập giá trị a"));
var b = Number(prompt("Nhập giá trị b"));
var c = Number(prompt("Nhập giá trị c"));

giaiPTB2(a, b, c);
