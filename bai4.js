// Hàm nhập dãy số từ bàn phím
function nhapDaySo() {
    var daySo = [];
    var soLuong = prompt("Nhập số lượng số trong dãy:");

    for (var i = 0; i < soLuong; i++) {
        var so = Number(prompt(`Nhập số thứ ${i + 1}:`));
        daySo.push(so);
    }
    return daySo;
}
// Hàm tính tổng các số trong dãy
function tinhTong(daySo) {
    var tong = 0;

    for (var i = 0; i < daySo.length; i++) {
        tong += daySo[i];
    }
    return tong;
}
// Hàm tìm số lớn nhất trong dãy
function timSoLonNhat(daySo) {
    var soLonNhat = daySo[0];

    for (var i = 1; i < daySo.length; i++) {
        if (daySo[i] > soLonNhat) {
            soLonNhat = daySo[i];
        }
    }

    return soLonNhat;
}
// Hàm tìm số nhỏ nhất trong dãy
function timSoNhoNhat(daySo) {
    var soNhoNhat = daySo[0];
    for (var i = 1; i < daySo.length; i++) {
        if (daySo[i] < soNhoNhat) {
            soNhoNhat = daySo[i];
        }
    }
    return soNhoNhat;
}

// Hàm in ra các số trong dãy
function inDaySo(daySo) {
    console.log("Dãy số là:");
    console.log(daySo);
}

// Gọi các hàm trên với dãy số nhập từ bàn phím
var daySo = nhapDaySo();
inDaySo(daySo);

var tong = tinhTong(daySo);
console.log("Tổng các số trong dãy là:", tong);

var soLonNhat = timSoLonNhat(daySo);
console.log("Số lớn nhất trong dãy là:", soLonNhat);

var soNhoNhat = timSoNhoNhat(daySo);
console.log("Số nhỏ nhất trong dãy là:", soNhoNhat);