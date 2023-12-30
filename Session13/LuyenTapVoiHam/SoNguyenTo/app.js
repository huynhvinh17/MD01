// //Nhập vào số bất kỳ kiểm tra thử là có số nguyên tố hay không
// let count = 0;
// let number = prompt("nhập vào số nguyên tố");
// for (let j = 1; j <= number; j++) {
//   if (number % j == 0) {
//     count++;
//   }
// }
// if (count == 2) {
//   console.log(`${number} là số nguyên tố`);
// } else {
//   console.log(`${number} không là số nguyên tố`);
// }

//Cho một mảng và tìm số nguyên tố trong mảng
let arrayInt = [
  8, 2, 3, 5, 6, 1, 4, 8, -1, -3, 11, 13, 23, 19, 20, 15, 18, 17, 6, 12,
];
let prime = [];
let notPrime = [];
let count = 0;
let check = 0;
for (let i = 0; i < arrayInt.length; i++) {
  for (let j = 1; j <= arrayInt[i]; j++) {
    if (arrayInt[i] % j == 0) {
      count += 1;
    }
  }
  if (count == 2) {
    prime.push(arrayInt[i]);
    count = 0;
  } else {
    notPrime.push(arrayInt[i]);
    count = 0;
  }
}
console.log(`Số nguyên tố ${prime}`);
console.log(`Số không nguyên tố ${notPrime}`);
