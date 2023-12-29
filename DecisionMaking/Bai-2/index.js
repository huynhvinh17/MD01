function myFunction() {
  var hour = parseInt(document.getElementById("hour").value);
  if (hour < 18) {
    alert("Good day");
  } else if (hour > 18 && hour <= 24) {
    alert("Good evening");
  } else {
    alert("mời bạn nhập lại");
  }
}
