const form = document.querySelector("form");

console.log("sdgfhsdgh");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "myusername" && password === "mypassword") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password");
  }
});
