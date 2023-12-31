//Nhập vào chuỗi ký tự, xóa ký tự số trong đó
let stringNumber = "uhbjdfs123123uihkfa2323";
let stringNumberText = stringNumber.split("");
let newString = [];
let newIndex = [];
let newNumber;
let newInteger;
console.log(`Chuỗi ban đầu là ${stringNumberText}`);
for (let i = 0; i < stringNumberText.length; i++) {
  newNumber = new Number(stringNumberText[i]); //Kiểm tra nếu là số thì trả về giá trị số, còn không sẽ trả về giá trị NaN
  newInteger = Number.isInteger(newNumber.valueOf()); //Kiểm tra nếu là số thì trả về true, còn lại là false
  // console.log(newInteger);
  // console.log(newNumber);
  if (newInteger) {
    newString.push(stringNumberText[i]); //Đẩy số vào mảng mới
    newIndex.push(i);
  }
}
console.log(`Số sau khi tách khỏi chuỗi là ${newString}`); // Số sau khi tách đưa vào mảng
//console.log(`phần tử của số ${newIndex}`); //indexof số sau khi tách

for (let i = 0; i < newString.length; i++) {
  for (let j = 0; j < stringNumberText.length; j++) {
    if (stringNumberText[j] == newString[i]) {
      stringNumberText.splice(j, 1);
    }
  }
}
console.log(`Chuỗi sau khi tách số là: s${stringNumberText.join("")}`);
