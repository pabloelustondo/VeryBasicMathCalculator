/**
 * This file is just a simple playground to try Decimal operations and tricks.
 */

const Decimal = require("decimal.js");

Decimal.set({ precision: 300 });

const a = new Decimal(
  "10000000000000000000000000000000000000000000000000000000000000000000000001"
);
const b = new Decimal("10000");

const aa = a.plus(a);
const c = a.plus(b);

console.log("a: ");
console.log(a.toString());

console.log("aa: ");
console.log(aa.toString());

console.log("a+b: ");
console.log(c.toString());
