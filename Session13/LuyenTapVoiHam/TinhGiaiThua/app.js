let number = +prompt("Nhập vào số cần tính giai thừa");

function Giaithua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let tinhGiaithua = n * Giaithua(n - 1);
    return tinhGiaithua;
  }
}
console.log(`Giai thừa của ${number} là ${Giaithua(number)}`);

//number = +prompt("Nhập vào số cần tính giai thừa");
