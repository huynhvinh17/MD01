let max;
let min;
let arrayInt = [2, 3, 5, 1, 4, 8, -1, -3, 11, 13, 15, 18, 17];
for (let i = 0; i < arrayInt.length; i++) {
  for (let j = i + 1; j <= arrayInt.length; j++) {
    if (arrayInt[j] > arrayInt[i]) {
      min = arrayInt[j];
      arrayInt[j] = arrayInt[i];
      arrayInt[i] = min;
    }
  }
}
console.log(`${min} là số nhỏ nhất`);

for (let i = 0; i < arrayInt.length; i++) {
  for (let j = i + 1; j <= arrayInt.length; j++) {
    if (arrayInt[j] < arrayInt[i]) {
      max = arrayInt[j];
      arrayInt[j] = arrayInt[i];
      arrayInt[i] = max;
    }
  }
}
console.log(`${max} là số lớn nhất`);
