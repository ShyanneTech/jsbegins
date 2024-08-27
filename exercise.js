"use strict";

const demo = document.getElementById("demo");
const btn = document.getElementById("btn");
demo.innerHTML = "the title of this document is " + document.title;
btn.addEventListener("click", () => {
  demo.innerHTML = "";
});

// var p = document.querySelectorAll("p");
// p[1].innerHTML = "Good job";
