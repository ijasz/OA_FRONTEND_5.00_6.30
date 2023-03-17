const arr = [3, 2, 23, 2, 3, 6];

// const output1 = arr.reduce((a, c) => a, 0);

// console.log(output1, "output1");

const myReduce = (array, callback, initialvalue) => {
  let accumalator = initialvalue;
  for (let i = 0; i < array.length; i++) {
    accumalator =
      accumalator !== undefined
        ? callback(accumalator, array[i], i, array)
        : array[0];
  }

  return accumalator;
};

function callback(accumalator, currentvalue, currentindex, array) {
  console.log(accumalator, "accumalator");
  console.log(currentvalue, "currentvalue");
  console.log(currentindex, "`currentindex");
  console.log(array, "`array");
  console.log("");
  return accumalator + currentvalue;
}

const a = myReduce(arr, callback);

console.log(a);
