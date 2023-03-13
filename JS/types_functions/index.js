// function name(a) {
//     a()
// }

// name(() => { console.log("sharan") })

const a = [4, 6, 8]
const b = [6, 6, 8]


// function area(r) {
//     const output = [];
//     for (const i of a) {
//         output.push(Math.PI * i ** 2)
//     }

//     return output
// }

// function diameter(r) {
//     const output = [];
//     for (const i of a) {
//         output.push(2 * i)
//     }

//     return output
// }

// function circumference(r) {
//     const output = [];
//     for (const i of a) {
//         output.push(2 * Math.PI * i)
//     }

//     return output
// }

// const areaFunc = area(a)
// const diameterFunc = diameter(a)
// const circumferenceFunc = circumference(a)

// console.log(areaFunc);
// console.log(diameterFunc);
// console.log(circumferenceFunc);


function circle(arr, func) {
    const output = [];
    for (const i of arr) {
        output.push(func(i))
    }

    return output
}

function area(i) {
    return Math.PI * i ** 2
}

function diameter(i) {
    return i * 2
}

function circumference(i) {
    return 2 * Math.PI * i
}

const areaFunc = circle(a, area)
const diameterFunc = circle(b, diameter)
const circumferenceFunc = circle(a, circumference)


console.log(a.map((i) => Math.PI * i ** 2));

console.log(b.map((i) => {
    return Math.PI * i ** 2
}));

console.log(areaFunc);
console.log(diameterFunc);
console.log(circumferenceFunc);





