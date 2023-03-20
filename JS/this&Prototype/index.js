// console.log(this);

// let c = 0;

function trigger(event) {
  console.log(event.srcElement);
  //   console.log("clicked", ++c);
}

const doc = document;

const btns = document.querySelectorAll("body > button");

for (const i of btns) {
  i.addEventListener("click", trigger);
}

// const btns =

// const obj1 = {
//   f: "sharan",
//   l: "eswar",
// };

// const obj2 = {
//   f: "xxx",
//   l: "yyy",
// };

// obj.getFullname();

// function getFullname(location) {
//   console.log(this.f + " " + this.l);
//   console.log(`Am from ${location}`);
//   console.log("");
// }

// getFullname.call(obj1, "pondy");
// getFullname.call(obj2, "chennai");

// call apply bind

// Prototype

// Array.prototype.myMap = function (callback) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], i, this));
//   }

//   return arr;
// };

// const arr1 = [1, 456, 35, 63, 24];
// const arr2 = [1, 456];

// const output1 = arr1.myMap((element) => {
//   return element * 2;
// });

// const output2 = arr2.myMap((element) => {
//   return element * 4;
// });

// const builtInMap = arr2.map((element) => {
//   return element * 4;
// });

// console.log(output1, "output1");
// console.log(output2, "output2");
// console.log(builtInMap, "builtInMap");
