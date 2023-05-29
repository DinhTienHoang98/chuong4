// Tạo menu
function taoMenu() {
    console.log("=== MENU ===");
    console.log("1. Giải PT bậc 1");
    console.log("2. Giải PT bậc 2");
    console.log("3. Thoát");
}

// Xử lý lựa chọn menu
function xuLyLuaChon(luaChon) {
    switch (luaChon) {
        case "1":
            console.log("Bạn đã chọn Giải PT bậc 1");
            giaiPTB1(a, b);
            break;
        case "2":
            console.log("Bạn đã chọn Giải PT bậc 2");
            giaiPTB2(a, b, c);
            break;
        case "3":
            console.log("Đã thoát");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
}

// Hàm chính
function main() {
    while (true) {
        taoMenu();
        var luaChon = prompt("Nhập lựa chọn của bạn");
        xuLyLuaChon(luaChon);
        if (luaChon === "3") {
            break;
        }
    }
}
// Viết hàm 
function giaiPTB2(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Giá trị a, b, c không hợp lệ. Vui lòng nhập số.");
        return;
    }
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
// Chạy chương trình
main();
