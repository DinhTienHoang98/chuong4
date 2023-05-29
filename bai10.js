// Bài 10: Viết chương trình có sử dụng hàm nhận vào 1 dãy số => in ra các số nguyên tố trong dãy đó
// Hàm kiểm tra số nguyên tố
function laSoNguyenTo(n) {
    // Kiểm tra các trường hợp đặc biệt
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }

    // Kiểm tra các trường hợp khác
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    var i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

// Hàm in ra các số nguyên tố trong dãy
function inSoNguyenToTrongDay(daySo) {
    const soNguyenTo = [];

    for (var i = 0; i < daySo.length; i++) {
        const soHienTai = daySo[i];
        if (laSoNguyenTo(soHienTai)) {
            soNguyenTo.push(soHienTai);
        }
    }

    console.log("Các số nguyên tố trong dãy là:");
    console.log(soNguyenTo);
}

// Gọi hàm inSoNguyenToTrongDay với một dãy số cụ thể
const daySo = [2, 3, 4, 5, 6, 7, 8, 9];
inSoNguyenToTrongDay(daySo);
