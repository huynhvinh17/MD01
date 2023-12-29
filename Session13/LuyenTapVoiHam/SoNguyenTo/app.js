let arrayInt = [2, 3, 5, 1, 4, 8, -1, -3, 11, 13, 15, 18, 17];
let prime = [2, 3, 5, 7];
//Tìm số nguyên tố
let even = [];
let a = false;
for (let i = 0; i < arrayInt.length; i++) {
  for (let j = 0; j < 4; j++) {
    if (arrayInt[i] >= 2) {
      if (arrayInt[i] % prime[j] == 0 && arrayInt[i] != prime[j]) {
        console.log(`${arrayInt[i]} Đây không phải là số nguyên tố`);
      } else {
        console.log(`${arrayInt[i]} Đây là số nguyên tố`);
      }
    }
    if (arrayInt[i] < 2) {
      console.log(`Đây không phải là số nguyên tố ${arrayInt[i]}`);
    }
  }
}
