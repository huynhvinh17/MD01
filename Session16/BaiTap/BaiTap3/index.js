// Lấy đối tượng ul (danh sách công việc) và input
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

// Hàm để thêm công việc mới
function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;

    let editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.textContent = "edit";
    editButton.onclick = function () {
      let originalButtonText = editButton.textContent;
      let originalButtonText1 = deleteButton.textContent;
      editButton.textContent = "";
      deleteButton.textContent = "";
      const newText = prompt(
        `Nhập nội dung mới cho công việc: ${li.textContent}`,
        li.textContent
      );
      if (newText !== null && newText.trim() !== "") {
        editButton.textContent = "";
        deleteButton.textContent = "";
        li.textContent = newText.trim();
      }

      editButton.textContent = originalButtonText;
      deleteButton.textContent = originalButtonText1;
    };

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "x";
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };

    taskList.appendChild(li);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskInput.value = "";
  }
}
