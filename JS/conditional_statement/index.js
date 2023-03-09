// if (false) {
//     console.log("if");
// } else if (false) {
//     console.log("else if");
// } else {
//     console.log("else");
// }

// if (false) {
//     console.log("if1");
// }
// if (true) {
//     console.log("if2");
// }
// if (false) {
//     console.log("if3");
// }

// else {
//     console.log("else");
// }


// if (false) {
//     console.log("if");
//     if (true) {
//         console.log("nested if");
//     }
// } else {
//     console.log("else");
// }


const date = new Date()

console.log(typeof date.getDay());
console.log(date.getDay());

const h1 = window.document.body.getElementsByTagName("h1")[0]

console.log(h1);


switch (date.getDay()) {
    case 0:
        h1.textContent = "sun"
        // console.log("sun");
        break;
    case 1:
        h1.textContent = "mon"
        // console.log("mon");
        break;
    case 2:
        h1.textContent = "tue"
        // console.log("tue");
        break;
    case 3:
        h1.textContent = "wed"
        // console.log("wed");
        break;
    case 4:
        h1.textContent = "thr"
        // console.log("thr");
        break;
    case 5:
        h1.textContent = "fri"
        // console.log("fri");
        break;
    case 6:
        h1.textContent = "sat"
        // console.log("sat");
        break;

    default:
        console.log("invalid");
        break;
}