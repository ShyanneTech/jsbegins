"use strict";
const demo = document.getElementById("demo");
const container = document.getElementById("container");
const button = document.getElementById("button");
document.getElementById("myText").value = "GOODBYE";
demo.innerHTML =
  "Sharon Loves TJ so much and she'd honour him much more as her partner";
function myFunction() {
  var x = document.forms["frm1"];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

var x = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
  "The first paragraph (index 0) is: " + x[0].innerHTML;

document.write(Date());

button.addEventListener("click", () => {
  container.style.backgroundColor = "white";
  container.style.color = "black";
});
