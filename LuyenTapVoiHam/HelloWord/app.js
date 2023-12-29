let Array = [1, 2, 3, 4, 5, 6, 5, 4, 2, 3, 4, 2, 3, 4];
maxcount = 0;
let newArray = [];

for (let i = 0; i < Array.length; i++) {
  let count = 1;
  for (let j = i + 1; j <= Array.length; j++) {
    if (Array[i] === Array[j]) {
      count++;
    }
  }

  if (count > maxcount) {
    maxcount = count;
    newArray = [Array[i]];
  } else if (count === maxcount) {
    newArray.push(Array[i]);
  }
}
console.log(`Phần tử xuất hiện nhiểu nhất:` + newArray.join(","));
