// 1.cube and square

let n = 2;
let m = 3;
if (n * n > m * m * m) {
  console.log("true");
} else {
  console.log("false");
}

// 2.area and premiter

let L1 = 13,
  b1 = 12,
  L2 = 3,
  b2 = 5;
// // let L2 = 20;
// // let b1 = 10;
// // let b2 = 15;
let area_rectangle1 = L1 * b1;
let area_rectangle2 = L2 * b2;
let prime_rectangle1 = (L1 + b1) * 2;
let prime_rectangle2 = (L2 + b2) * 2;
console.log(area_rectangle1 < area_rectangle2);
console.log(prime_rectangle1 < prime_rectangle2);

// 3.compare seven numbers

let a = 1,
  b = 2,
  c = 3,
  d = 4,
  e = 5,
  f = 6,
  g = 7;
let sum1 = (a + b) * c;
let sum2 = d + e + f + g;
console.log(sum1 > sum2);

// 4.sum and compare

let a = 2,
  b = 3,
  c = 4,
  d = 6,
  e = 7;
let sum1 = a + b + c;
let sum2 = d + e;
console.log(sum1 > sum2);

// 5.compare two numbers

let a = 2;
let b = "2";
console.log(a === b);
console.log(a !== b);

// 6.update and compare

let a = 2;
let b = 334;
console.log(a > b);
if (a < b) {
  let c = 435;
  a = a + c;
  console.log(a > b);
}
