//***********************Tạo một ứng dụng todolist. ***************************
let todolist = ["Go to school at 7am", "Read book at 12 am"];
let state = true;
while (state) {
  let input = prompt("Nhập vào ngẫu nhiên 5 chữ cái C/R/U/D/E").toUpperCase();
  if (input == "C") {
    let addTodolist = prompt("Nhập vào danh sách công việc mới");
    todolist.push(addTodolist);
    console.log(`Danh sách công việc mới ${todolist}`);
  } else if (input == "R") {
    console.log(`Danh sách công việc trong todolist ${todolist}`);
  } else if (input == "U") {
    let UpdatePositionTodolist = Number(
      prompt("Vị trí công việc muốn cấp nhật")
    );
    let UpdateContentTodolist = prompt("Nội dung công việc muốn update");
    todolist.splice(UpdatePositionTodolist - 1, 1, UpdateContentTodolist);
    console.log(`Danh sách công việc đã update trong todolist ${todolist}`);
  } else if (input == "D") {
    let deleteTodolist = Number(prompt("Vị trí công việc muốn xóa"));
    todolist.splice(deleteTodolist - 1, 1);
    console.log(`Danh sách công việc sau khi delete : ${todolist}`);
  } else if (input == "E") {
    state = false;
  } else {
    input = prompt("Nhập vào ngẫu nhiên 5 chữ cái C/R/U/D/E").toUpperCase();
  }
}
