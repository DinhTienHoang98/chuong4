// Hàm kiểm tra số nguyên tố
function soNguyenTo(n) {
    var isPrime = true;
    for (var i = 2; i < n; i++) {
        if (n % i === 0)
            isPrime = false;
    }
    if (isPrime) {
        console.log(n + ' là số nguyên tố');
    } else {
        console.log(n + ' ko phải là số nguyên tố');
    }
}
(soNguyenTo(6));

// Hàm kiểm tra số hoàn hảo
// tổng các ước bằng chính nó
function soHoanHao(n) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
        if (n % i === 0)
            sum += i;
    }
    if (sum === n)
        return true;
    return false;
};
console.log(soHoanHao(6));

// Hàm kiểm tra số Fibonacci
function soFibonacci(n) {
    var t1 = 1, t2 = 1, next;
    while (t1 < n) {
        next = t1 + t2;
        t1 = t2;
        t2 = next;
    }
    if (t1 === n)
        return true;
    return false;
}
console.log(soFibonacci(4));

// Hàm kiểm tra số đối xứng
function soDoiXung(n) {
    var soGoc = n, sodao = 0, donvi;
    while (n > 0) {
        donvi = n % 10;
        sodao = sodao * 10 + donvi;
        n = Math.floor(n / 10);
    }
    if (soGoc === sodao)
        return true;
    return false;
}
console.log(soDoiXung(234565432));