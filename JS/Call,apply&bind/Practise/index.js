// // call// apply

const fullname = function (location, age, degree) {
  return (
    this.firstname + " " + this.secondname + " " + location + " " + age + degree
  );
};
const getDOB = function () {
  const currentDate = new Date();

  if (
    currentDate.getMonth() >= this.age.getMonth() &&
    currentDate.getDay() >= this.age.getDay()
  ) {
    console.log(
      Math.abs(this.age.getFullYear() - currentDate.getFullYear()),
      "if"
    );
  } else {
    return Math.abs(this.age.getFullYear() - currentDate.getFullYear()) - 1;
  }
};

const person1 = {
  firstname: "prem",
  secondname: "anand",
  age: new Date("2001-07-09"),
};

const person2 = {
  firstname: "mani",
  secondname: "bharathi",
  age: 27,
};
const person3 = {
  firstname: "mani",
  secondname: "bharathi",
  age: 22,
};

// console.log(fullname.call(person1, "pondy", 27, "b.tech"));
// console.log(fullname.call(person2, "kiliyanur"));

// console.log(fullname.apply(person1, ["pondy", 18, "b.tech"]));
// console.log(fullname.apply(person2, ["kiliyanur", 20, "b.tech"]));

// let details = fullname.bind(person1, "pondy", 18, "b.tech");

// console.log(details());

console.log(getDOB.call(person1));
