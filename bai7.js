// Bài 7: Viết hàm kiểm tra xem 1 số có phải là số hoàn hảo không?
function soHoanHao(a) {
    var total = 0;
    for (i = 1; i < a; i++) {
        if (a % i == 0) {
            total += i;
        }
    }
    if (total == a && total != 0) {
        console.log(a + ' là số hoàn hảo');
    } else {
        console.log(a + ' không phải là số hoàn hảo');
    }
}
var number = prompt('Nhap 1 so');
soHoanHao(number);