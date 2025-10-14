function shoMessage() {
  alert("Erormu Semangatku");
}

var i = 0;
var txt = "Gwe Robbypms";
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function () {
  typeWriter();
};
