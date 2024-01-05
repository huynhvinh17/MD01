// const d = new Date();
// let hour = d.getHours();
// document.getElementById("demo").innerHTML = Date.now();

// function displayHours() {
//   Document.getElementById("demo").innerHTML == Date.now();
// }
// displayHours();

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
setInterval(myTimer, 1000);

function myHours() {
  const d = new Date();
  document.getElementById("hours").innerHTML = d.getHours();
}
setInterval(myHours, 1000);

function myMinutes() {
  const d = new Date();
  document.getElementById("minutes").innerHTML = d.getMinutes();
}
setInterval(myMinutes, 1000);

function mySeconds() {
  const d = new Date();
  document.getElementById("seconds").innerHTML = d.getSeconds();
}
setInterval(mySeconds, 1000);
