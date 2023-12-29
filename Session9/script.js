// function demo() {
//   alert("xinchao!");
// }
// // function showMessage() {
// //     document.getElementById('messageDiv').innerHTML

// // }
// alert("xinchao!");
// Từ khóa var có thể khai báo lại và ghi lại giá trị
// let a =10;
// console.log("trước khi gán lại =>");

// var a=10;
// console.log("trước khi gán lại và khai báo lại");
// var a ="Bác";
// console.log(a);
// const  a =10;
// console.log(a);
// let a;
// console.log(typeof a);

// typeof null => Object;
// (null) =>null;
// undefined được khởi tạo nhưng không được gán giá trị;
// null = rỗng hoặc null/
// bigint : kiểu số lớn, chuỗi số nguyên
// Symbol : biểu tượng

// hosting là gì? Là kiểu dữ liệu var được dưa lên đầu/
// let a = 12;
// console.log(a++ + a++ - ++a);

//Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học và sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này
// let a = Number(prompt("nhập vào điểm vật lý"));
// let b = Number(prompt("Nhập vào điểm hóa học"));
// let c = Number(prompt("Nhập vào điểm vật lý"));
// console.log("Điểm tổng là, ", a + b + c);
// console.log("Điểm trung bình là", (a + b + c) / 3);

//Bài 2:
// let C = Number(prompt("Nhập vào độ C"));
// let F = Number;
// F = (5 * C) / 9 + 32;
// alert("Độ F là: " + F);

//Bài 3: diện tích hình tròn
// let R = Number(prompt("Nhập vào bán kính"));
// let pi = 3.14;
// alert("Diện tích hình tròn là " + pi * R * R);

// //Bài 3: Chu vi hình tròn
// let R = Number(prompt("Nhập vào bán kính hình tròn"));
// let pi = 3.14;
// alert("Chu vi hình tròn là " + 2 * pi * R);

//Bài 1:
alert("Welcome to Rikkei Academy");
let age = Number(prompt("Nhập vào số tuổi của bạn"));
alert("Số tuổi của bạn là " + age);
console.log("chao mừng bạn đến với học viện Rikkei Academy ");

confirm("Bạn đã dủ tuổi chưa");
if (confirm == true) {
  alert("Bạn đã đủ tuổi uống bia");
} else {
  alert("Bạn còn con nít lắm");
}

// //Bài 7: Phân biệt “==” và “===”
// Kết quả của phép toán và giải thích:
// let a = 5;
// let b= “5”;
// console.log(a==b);  true
// console.log(a===b); false
// console.log(a!=b);  false
// console.log(a!==b); true

//Trả lời: === so sánh thêm kiểu dữ liệu

// //Bài 8: Phân biệt a++ và ++a.
// Tính giá trị của biếu thức sau:
// let a=6;
// let result: ++a + a + a++ + ++a + a;

//kq: a=33

// //Bài 9: Kết quả của các phép toán.
//    console.log(0 || NaN ||"Rikkei Academy"||null);  "Rikkei Academy"
//    console.log(null || NaN || false || null);     null
//    console.log(undefined || 1 || 5 || null);    1
//    console.log("" || null || 5 || NaN);     5
//    console.log(1 || null || 12|| NaN);     1

// // Bài 10: Kết quả của các phép toán.
//    console.log(0 && 1 && "Rikkei Academy" &&null); null
//    console.log(2 && NaN && false && null); NaN
//    console.log(3 && 1 && 5 && null); null
//    console.log("1" && undefined && 5 && NaN); NaN
//    console.log(1 && null && 12&& NaN); NaN
