const firstName = document.querySelector("#FirstName");
const lastName = document.querySelector("#LastName");
const userName = document.querySelector("#UserName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");
const btn = document.querySelector("#btn");
const form = document.querySelector("form");
const loader = document.querySelector("#loader");
const users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    firstName.value,
    lastName.value,
    userName.value,
    email.value,
    password.value,
    cPassword.value
  );
  if (
    !firstName.value ||
    !lastName.value ||
    !userName.value ||
    !email.value ||
    !password.value ||
    !cPassword.value
  ) {
    return alert("all the feild are required");
  }

  const isExist = users.find((user) => {
    return user.email === email.value || user.firstName === firstName.value;
  });

  if (isExist) {
    return alert(`${firstName.value || email.value} already exist`);
  }

  if (password.value.length < 8) {
    return alert("password must be minimum 8 and max 9 characters");
  }

  if (password.value.length < 8) {
    return alert("password must be minimum 8 and max 9 characters");
  }

  if (password.value !== cPassword.value) {
    return alert("Your password did not matched");
  }

  users.push({
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    email: email.value,
    password: password.value,
    cPassword: cPassword.value,
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("sucessfully");
  loader.style.display = "block";
  setTimeout(() => {
    window.location.href = "../Login/index.html";
  }, 2000);



});


