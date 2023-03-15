// setTimeout(() => {
//     console.log("HELLO I AM CALLBACK FUNC EXECUTED");
// }, 5000)

// setInterval(() => {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }, 1000);

// function func(callback, v1, v2) {
//     const arr = [];
//     for (let i = v1; i < v2; i++) {
//         //  arr.push(callback(i))
//     }
// return arr

// }

// const v = func((i) => i, 5, 20)

// console.log(v);

const arr = [14, 12, 43, 24, 56, 7];

// const a = arr.map((elements, index, array) => {
//   console.log(elements, index, array);
// });

const a = arr.map((i) => i * 2);

console.log(a);

console.log("");

function mymap(values, callback) {
  const arr = [];
  for (let i = 0; i < values.length; i++) {
    arr.push(callback(values[i], i, values));
  }
  return arr;
}

// mymap(arr, (elements, index, array) => {
//   console.log(elements, index, array);
// });

const b = mymap(arr, (i) => i * 2);

console.log(b);
