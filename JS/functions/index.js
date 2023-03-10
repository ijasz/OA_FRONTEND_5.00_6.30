// Function Statement or Function Declaration
// name()

// console.log(func);

function func() {
    var name = "ocean";
    return name
}

// console.log(func());

// Function Expression

// console.log(a);

// Named func

var a = function func() {
    var name = "ocean";
    return name
}

// Named func

var b = function () {
    var name = "ocean";
    return name
}

// b()

// Arrow func v=> ES5 - 2015

var c = () => {
    return 50 + 5
};

console.log(c());
