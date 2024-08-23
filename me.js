"use strict";

const aboutMe = {
  name: "Sharon Oladipo Toluwanmi",
  age: 20,
  relationshipStatus: "SinglyTaken😂😂 ",
  loveOfMyLife: "titi",
};

if (aboutMe.loveOfMyLife === "Emmanuelnitemi") {
  console.log(`Sharon really loves ${aboutMe.loveOfMyLife}`);
} else {
  console.log(
    `Trust me you made a mistake in your code cos she loves only Emmanuelnitemi that way`
  );
}
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
  console.log(n, x);
}

let a = 0;
let b = 0;

while (a < 5) {
  a++;
  if (a === 3) {
    continue;
  }
  b += a;
  console.log(b);
}

let i = 0;
let j = 0;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
  }
  if (j % 2 === 0) {
    continue checkiandj;
  }
  console.log(j, "us odd");
}

function squareNumber(number) {
  return number * number;
}

console.log(squareNumber(16));

const cube = function (x) {
  return x * x * x;
};
const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers));

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
  // }

  function testNumber(a) {
    //   console.log(a + b);
    function second(b) {
      console.log(a + b);
    }
    return second;
  }
  const blaa = testNumber(5);
  testNumber(5)(3);

  function myConCat(separator) {
    let result = "";

    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
    }
    return result;
  }
}
// console.log(myConCat("; ", "red", "orange"));
