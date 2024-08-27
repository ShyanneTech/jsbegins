"use strict";
function birthdayReveal() {
  const container = document.getElementById("container");
  const reveal = document.getElementById("demo");
  container.style.backgroundColor = "plum";
  container.style.color = "black";
  reveal.innerHTML = "Wednesday, Aug 4, 2004";
}

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mOver(over) {
  over.innerHTML = "God Caresss";
}
function mOut(out) {
  out.innerHTML = "DON'T GIVE UP";
}

const btnn = document.getElementById("btnn");
let result = document.getElementById("result");
btnn.addEventListener("click", clickFunction);
btnn.addEventListener("mouseover", overFunction);
btnn.addEventListener("mouseout", outFunction);

function clickFunction() {
  result.innerHTML += "Clicked <br>";
}
function overFunction() {
  result.innerHTML += "MouseOver <br>";
}
function outFunction() {
  result.innerHTML += "MouseOut <br>";
}

// window.addEventListener("sc")
