//Tính tổng các số nguyên tố có trong chuỗi

let number = [4, 5, 2, 8, 9, 15, 16, 18, 17, 2, 3, 5, 11];
let primeNumber = [];
let num = 0;
let sum = 0;

function Prime() {
  for (let i = 0; i < number.length; i++) {
    for (let j = 1; j < 1000; j++) {
      //Hỏi tập hợp số nguyên là gìs
      if (number[i] % j == 0) {
        num++;
      }
    }
    if (num == 2) {
      primeNumber.push(number[i]);
      sum = sum + number[i];
    }
    num = 0;
  }
  console.log(`Đây là số nguyên tố ${primeNumber}`);
  console.log(`Tổng số nguyên tố là ${sum}`);
}

Prime();
