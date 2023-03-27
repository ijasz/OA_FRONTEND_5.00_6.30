// const newPhone = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (newPhone) {
//       resolve("i bought a new phone");
//     } else {
//       reject("your bank bal is empty");
//     }
//   }, 5000);
// });

// console.log(promise);

// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

const d = new Date();
console.log(d.getTime() + 120, "fdg");
// console.log(d.getTime());
// d.setTime(d.getTime() + exdays * 2 * 1000);
// let expires = "expires=" + d.toUTCString();
let expires = d.getTime() + 120;

document.cookie = `username=John Doe; expires=${expires.toUTCString()}`;
