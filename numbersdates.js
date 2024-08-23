"use strict";
// Bianry
let binary = 0b11111100000000;
console.log(binary);

// octal
let octal = 0o755;
console.log(octal);
// strict mode forbids this
// octal = 0755;
console.log(octal);

// hexadecimal
let hexad = 0xab1;
console.log(hexad);
hexad = 0xab1;
console.log(hexad);

// exponentiation

let exp = 1.75e-5;
console.log(exp);

// Number object

const biggestNum = Number.MAX_VALUE;

console.log(biggestNum);
const change = Number.parseFloat("20");
console.log(change);
// we have more
Number.prototype.toFixed;

let random = Math.random();
console.log(random);

// DATE OBJECT

const todaysDate = new Date(2004, 7, 4);
console.log(todaysDate);

const birthdayDate = new Date();
console.log(birthdayDate);
birthdayDate.setTime(Date.parse("4 2004 Aug"));
console.log(birthdayDate);

function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M" : " A.M";
  console.log(time);
  return temp;
}
console.log(JSClock());
console.log("\xA9");

const july172014 = new Date("2014-07-17");
const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};

const americaDateTime = new Intl.DateTimeFormat("en-US", options).format;

console.log(americaDateTime(july172014));
