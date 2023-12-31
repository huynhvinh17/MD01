//Nhập vào chuỗi số nguyên, tìm số lớn nhất và cũng là số duy nhất
let maxNumber = [13, 1, 2, 3, 5, 5, 7, 8, 8, 10, 11, 12, 14, 14];
let max = 0;
let check = -1;
let num = 0;
function maxNumberInt() {
  for (let i = 0; i < maxNumber.length; i++) {
    for (let j = 0; j < maxNumber.length; j++) {
      if (maxNumber[i] === maxNumber[j]) {
        num++;
      }
    }
    if (max < maxNumber[i] && num === 1) {
      max = maxNumber;
      check = i;
    }
    num = 0;
  }

  console.log(`Số lớn nhất và duy nhất là ${maxNumber[check]}`);
}

maxNumberInt();
