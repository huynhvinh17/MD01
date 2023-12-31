//Nhập vào chuỗi ký tự và đảo ngược các thành phần

function DaoChuoi() {
  let text = "This is an example!";
  newText = text.split(" ");
  console.log(newText);
  let textReverse;
  let newTextArr = [];
  for (let i = 0; i < newText.length; i++) {
    textReverse = newText[i].split("").reverse().join("");
    newTextArr.push(textReverse);
  }
  console.log(`${newTextArr.join(" ")}`);
}

DaoChuoi();
