"use strict";
let id01 = document.getElementById("id01");
let id02 = document.getElementById("id02");

// id02.innerHTML = id01.innerHTML;
// id02.innerHTML = id01.firstChild.nodeValue;

id02.innerHTML = id01.childNodes[0].nodeValue;

// alert(document.body.innerHTML);
// alert(document.documentElement.innerHTML);

// NODE NAME

document.getElementById("id02").innerHTML =
  document.getElementById("id01").nodeName;

document.getElementById("id02").innerHTML =
  document.getElementById("id01").nodeType;

//   creating element using nodes

// const newElem = document.createElement("p");
// const node = document.createTextNode("This is the third paragraph");
// newElem.appendChild(node);

// const div1 = document.getElementById("div1");
// div1.appendChild(newElem);

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

// var element = document.getElementById("div1");
// var child = document.getElementById("p2");
// element.insertBefore(para, child);

// element.removeChild(child);

var parent = document.getElementById("div1");
var child = document.getElementById("p2");
parent.insertBefore(para, child);

const theps = document.getElementsByTagName("p");
function myFunction() {
  for (let i = 0; i < theps.length; i++) {
    theps[i].style.color = "red";
  }
}
