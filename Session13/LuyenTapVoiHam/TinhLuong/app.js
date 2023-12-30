// let day = +prompt("nhập vào số ngày đi làm của tháng"); //17
// let hour = +prompt("nhập vào số giờ tăng ca của tháng"); //20h
// let sun = +prompt("Nhập vào số ngày làm chủ nhật"); //2
// let nightShift = +prompt("Nhập vào số ngày làm ca đêm"); //8
// let luong = +prompt("Nhập vào số lương tháng"); //1380

let day = document.getElementById("day").value;
let hourUpper = document.getElementById("hourUpper").value;
let sun = document.getElementById("sun").value;
let nightShift = document.getElementById("nightShift").value;
let luong = document.getElementById("luong").value;
function luongNumber() {
  let n =
    (day * 8 + hourUpper * 0.25 + sun * 8 * 0.35 + nightShift * 8 * 0.25) *
    luong;
  console.log(n);
}
