// câu 1:

function giaiPhuongTrinhBacNhat(a, b) {
    if (a == 0) {
        if (b == 0) {
            console.log("Phương trình vô số nghiệm");
        } else {
            console.log("Phương trình vô nghiệm");
        }
    } else {
        console.log("Nghiệm của phương trình là: " + (-b / a));
    }
}

let a = 5;
let b = 8;
let nghiem = giaiPhuongTrinhBacNhat(a, b);
console.log(nghiem);
