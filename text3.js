// câu 3: 
function demSoNguyenAm(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'o' || string[i] == 'e' || string[i] == 'u' || string[i] == 'i') {
            count++;
        }
    } if (count == 0) {
        return false;
    } else {
        return `số kí tự nguyên âm là ${count}`;
    }
}
var input = prompt('Nhập chuỗi bất kỳ:');
console.log(demSoNguyenAm(input));