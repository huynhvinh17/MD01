let arrayInt = [2, 3, 5, 1, 4, 8, -1, -3, 11, 13, 15, 18, 17];
let max = arrayInt[0];
let min = arrayInt[0];
for (let i = 0; i < arrayInt.length; i++) {
  if (min < arrayInt[i]) {
    min = arrayInt[i];
  }
}
console.log(`${min} là số nhỏ nhất`);

for (let i = 0; i < arrayInt.length; i++) {
  if (max > arrayInt[i]) {
    max = arrayInt[i];
  }
}
console.log(`${max} là số lớn nhất`);
