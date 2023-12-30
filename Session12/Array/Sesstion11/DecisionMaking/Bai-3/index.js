function myFunction() {
  var hour = parseInt(document.getElementById("hour").value);
  if (hour < 10) {
    alert("Good morning");
  } else if (hour >= 10 && hour < 20) {
    alert("good day");
  } else if (hour >= 20 && hour <= 24) {
    alert("Good evening");
  } else {
    alert("mời bạn nhập lại");
  }
}
