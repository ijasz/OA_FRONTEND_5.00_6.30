const arr = [2, 3, 4, 5, 6, 10];

const output = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  //   console.log(accumulator, "accumulator");
  //   console.log(currentValue, "currentValue");
  //   console.log(currentIndex, "currentIndex");
  //   console.log(array, "array");
  return accumulator + 1;
}, 10);

console.log(output, "a");
