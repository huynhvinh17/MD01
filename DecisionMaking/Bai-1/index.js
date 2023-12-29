function myFunction() {
  var age = parseInt(document.getElementById("age").value);
  document.getElementById("demo").innerHTML = `Số tuổi của bạn là ${age}`;
  if (age >= "18") {
    alert("Bạn đã trên 18 tuổi");
  } else {
    alert("Bạn chưa đủ tuổi");
  }
}
