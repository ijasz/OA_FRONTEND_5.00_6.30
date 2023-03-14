console.log("starts");
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];


// Remove negative numbers
function checkNumber(numbers, callback) {
    const obj = {
        positive: [],
        negative: []
    };
    for (const x of numbers) {
        if (callback(x)) {
            obj.positive.push(x);
        } else {
            obj.negative.push(x);
        }
    }
    return obj;
}


// Call checkNumber with a Callback
const obj = checkNumber(myNumbers, (x) => x >= 0);

// Display Result
console.log(obj);


// const day = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"]

// function marriage() {
//     const arr = []
//     for (let i of day) {
//         if (i === "thr") {
//             return arr
//         } else {
//             arr.push(i)
//         }
//     }

// }


// const result = marriage()

// console.log(result, "value returned");