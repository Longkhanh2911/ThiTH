function timViTriPhanTu(element, array) {
    for (let i = 0; i < element.length; i++) {
        if (element[i] == array) {
            return i;
        }
    }
    return -1;
}

let element = [1, 2, 3, 4, 6, 7, 5, 9, 10];
let array = prompt('Nhập giá Trị: ');
let index = timViTriPhanTu(element, array);

if (index == -1) {
    alert('không có phần tử trong mảng');
} else {
    alert('phần tử có ở trong mảng');
}
