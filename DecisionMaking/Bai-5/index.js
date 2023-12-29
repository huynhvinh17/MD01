function myFunction() {
  var myNumber = parseInt(document.getElementById("myNumber").value);
  switch (myNumber % 2) {
    case 0:
      alert("Đây là số chẳn");
      break;
    case 1:
      alert("đây là số lẻ");
      break;
  }
}
