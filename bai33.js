// var check = true;
// function inputNumber(msg) {
//     var number = prompt(msg);
//     if (number === '' || number === null) {
//         console.log("Vui lòng nhập lại!");
//         check = false;
//     } if (isNaN(number)) {
//         console.log("Không đúng định dạng!");
//         check = false;
//     } else {
//         return Number(number);
//     }
// }

// function giaiPTB1(a, b) {
//     if (!check) {
//         alert("Lỗi khi nhập!");
//     } if (a === 0 && b === 0) {
//         console.log("Phương trình vô số nghiệm!");
//     } else if (a === 0 && b !== 0) {
//         console.log("Phương trình vô nghiệm!");
//     } else {
//         console.log("Phuong trinh co nghiem x = " + (-b / a));
//     }
// }

// function giaiPTB2(a, b, c) {
//     if (!check) {
//         alert("Lỗi khi nhập!");
//     } else if (a === 0) {
//         giaiPTB1(b, c);
//     } else {
//         var delta = Math.pow(b, 2) - (4 * a * c);
//         if (delta < 0) {
//             console.log("Phương trình vô nghiệm");
//         } else if (delta === 0) {
//             console.log("Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a)));
//         } else {
//             var x1 = (-b - Math.sqrt(delta)) / (2 * a);
//             var x2 = (-b + Math.sqrt(delta)) / (2 * a);
//             console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
//         }
//     }
// }


// const menu = ` -- GIẢI PHƯƠNG TRÌNH --
// 1. BẬC 1
// 2. BẬC 2
// 3. THOÁT

// Chọn thao tác thực hiện:
// `;

// do {
//     var input = prompt(menu);

//     if (input === '1') {
//         var a = inputNumber("Nhập hệ số a: ");
//         var b = inputNumber("Nhập hệ số b: ");
//         giaiPTB1(a, b);
//     } else if (input === '2') {
//         var a = inputNumber("Nhập hệ số a: ");
//         var b = inputNumber("Nhập hệ số b: ");
//         var c = inputNumber("Nhập hệ số c: ");
//         giaiPTB2(a, b, c);
//     } else if (input === '3') {
//         console.log('Good Bye!');
//     } else {
//         console.log('Bạn đã nhập sai');
//         break;
//     }
// } while (true);

//////////////////////////////////////
// var check = true;
// function inputNumber(msg) {
//     var number = prompt(msg);
//     if (number == '' || number == null) {
//         console.log('Vui lòng nhập lại');
//         check = false;
//     } else if (isNaN(number)) {
//         console.log('chưa đúng định dạng');
//         check = false;
//     } else {
//         return Number(number);
//     }
// };
// // pt bậc 1
// function giaiPTB1(a, b) {
//     if (!check) {
//         alert('Lỗi khi nhập');
//     }
//     if (a === 0 && b === 0) {
//         console.log("Phương trình vô số nghiệm!");
//     } else if (a === 0 && b !== 0) {
//         console.log("Phương trình vô nghiệm!");
//     } else {
//         console.log("Phuong trinh co nghiem x = " + (-b / a));
//     }
// };
// // pt bậc 2
// function giaiPTB2(a, b, c) {
//     if (!check) {
//         alert('Lỗi khi nhập');
//     }
//     else if (a === 0) {
//         giaiPTB1(b, c);
//     } else {
//         var delta = Math.pow(b, 2) - (4 * a * c);
//         if (delta < 0) {
//             console.log('Pt vô nghiệm');
//         } else if (delta === 0) {
//             console.log('Pt có nghiệm x là: ' + -b / (2 * a));
//         } else {
//             var x1 = (-b - math.sqrt(delta)) / (2 * a);
//             var x2 = (-b + math.sqrt(delta)) / (2 * a);
//             console.log('Pt có 2 nghiệm là: ' + x1 + x2);
//         }
//     }
// }

// var menu = `Giải PT
// 1. BẬC 1
// 2. BẬC 2
// 3. THOÁT

// Chọn thao tác thực hiện:
// `;
// do {
//     var input = prompt(menu);

//     if (input == '1') {
//         var a = inputNumber('nhập a');
//         var b = inputNumber('nhập b');
//         giaiPTB1(a, b);
//     } else if (input == '2') {
//         var a = inputNumber('nhập a');
//         var b = inputNumber('nhập b');
//         var c = inputNumber('nhập c');
//         giaiPTB2(a, b, c);
//     } else if (input == '3') {
//         console.log('bạn đã thoát');
//     } else {
//         console.log('lựa chọn ko hợp lệ');
//         break;
//     }
// } while (true);

var check = true;
function inputNumber(msg) {
    var number = prompt(msg);
    if (number === '' || number === null) {
        console.log('vui lòng nhập lại');
        check = false;
    } else if (isNaN(number)) {
        console.log('nhập chưa đúng định dạng');
        check = false;
    } else {
        return Number(number);
    }
}
// pt bậc 1
function giaiPTB1(a, b) {
    if (!check) {
        alert('Lỗi khi nhập');
    }
    if (a === 0 && b === 0) {
        console.log("Phương trình vô số nghiệm!");
    } else if (a === 0 && b !== 0) {
        console.log("Phương trình vô nghiệm!");
    } else {
        console.log("Phuong trinh co nghiem x = " + (-b / a));
    }
};
// pt bậc 2
function giaiPTB2(a, b, c) {
    if (!check) {
        alert('Lỗi khi nhập');
    }
    else if (a === 0) {
        giaiPTB1(b, c);
    } else {
        var delta = Math.pow(b, 2) - (4 * a * c);
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
// tạo menu
var menu = `====GIAI PT====
1. BẬC 1
2. BẬC 2
3. THOÁT

Chọn thao tác thực hiện:
`;

do {
    var input = prompt(menu);
    if (input === '1') {
        var a = inputNumber('nhap a');
        var b = inputNumber('nhap b');
        giaiPTB1(a, b);
    } else if (input === '2') {
        var a = inputNumber('nhap a');
        var b = inputNumber('nhap b');
        var c = inputNumber('nhap c');
        giaiPTB2(a, b, c);
    } else if (input === '3') {
        console.log('bạn đã thoát chương trình');
        break;

    } else {
        alert('lựa chọn ko đúng');
        continue;
    };
} while (true);