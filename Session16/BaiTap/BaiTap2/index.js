//Tạo bàn phím cho ô text

let textarea = document.getElementById("myTextarea");
let keyboard = document.getElementById("keyboard");

let keyboardLayout = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

//Hàm để thêm sự kiện khi click vào phím
function addKeyClick(key) {
  key.addEventListener("click", () => {
    textarea.value += key.textContent;
  });
}
function addKeySpace(key) {
  key.addEventListener("click", () => {
    textarea.value += key.value;
  });
}
//Thêm text vào sau mỗi key
function deleteText(key) {
  key.addEventListener("click", () => {
    textarea.value = textarea.value.slice(0, -1);
  });
}

//Tạo và thêm các phím vào bàn phím

keyboardLayout.forEach((row) => {
  let rowKeyboard = document.createElement("div");
  rowKeyboard.classList.add("row");
  row.split("").forEach((element) => {
    let key = document.createElement("div");
    key.classList.add("key");
    key.textContent = element;
    rowKeyboard.appendChild(key);
    addKeyClick(key);
  });
  keyboard.appendChild(rowKeyboard);
});

let space = document.createElement("div");
space.classList.add("space");
space.textContent = " ";
keyboard.appendChild(space);
addKeyClick(space);

let deleteKey = document.createElement("div");
deleteKey.classList.add("deleteKey");
deleteKey.textContent = "DELETE";
keyboard.appendChild(deleteKey);
deleteText(deleteKey);
