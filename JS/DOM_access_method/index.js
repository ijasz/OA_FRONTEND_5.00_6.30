const doc = document;

// Element access

// console.log(doc.head);
// console.log(doc.body);

// console.log(doc.getElementsByClassName("para"));
// console.log(doc.getElementById("p"));
// console.log(doc.getElementsByTagName("p"));
// console.log(doc.getElementsByName("paragraph"));

// console.log(doc.querySelector(".para"));
// console.log(doc.querySelectorAll(".para"));

// styling element(camelcase)

// doc.querySelector(".para").style.color = "red";
// doc.querySelector(".para").style.backgroundColor = "grey";
// doc.querySelector(".para").textContent = "hi☻";

// creating element

let c = 0;

function createEle() {
  const newDiv = doc.createElement("div");
  newDiv.textContent = ++c;
  //   newDiv.className = "box";
  newDiv.classList.add("box", "center");
  //   const newDivStyle = newDiv.style;
  //   newDivStyle.height = "100px";
  //   newDivStyle.width = "100px";
  //   newDivStyle.marginBlock = "10px";
  //   newDivStyle.backgroundColor = "green";

  doc.body.appendChild(newDiv);

  console.log(newDiv);
}
let f = 0;
function createElement2() {
  const newDiv = doc.createElement("div");
  newDiv.textContent = --f;
  newDiv.classList.add("box", "center");
  doc.body.appendChild(newDiv);

  console.log(newDiv);
}
