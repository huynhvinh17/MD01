let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Sum10() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] == 10) {
        console.log(`${arr[i]} + ${arr[j]} = 10`);
      }
    }
  }
}
Sum10();
