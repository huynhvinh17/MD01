//let Arr = "hello world";

let Arr = prompt("Nhập vào câu bất kỳ").toLowerCase();
let newArr = Arr.split("");

console.log(newArr);
let count = 0;
function tanSuat() {
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i] === newArr[j]) {
        count++;
      }
    }
    let soLan = count;
    console.log(`Ký tự ${newArr[i]} xuất hiện ${soLan} lần`);
    count = 0;
  }
}
tanSuat();
