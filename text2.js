function timViTriPhanTu(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return i;
        }
    }
    return -1;
}

let array = [1, 2, 3, 4, 6, 7, 5, 9, 10];
let element = prompt('Nhập giá Trị: ');
let index = timViTriPhanTu(array, element);

if (index == -1) {
    alert('không có phần tử trong mảng');
} else {
    alert('phần tử có ở trong mảng');
}
