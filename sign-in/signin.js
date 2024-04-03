let signinbtn = document.querySelector("#signinbtn");
let password = document.querySelector("#floatingPassword");
let username = document.querySelector("#floatingInput");

signinbtn.addEventListener("click", (valid) => {
  if (
    username.value == "singhbalwant168@gmail.com" &&
    password.value == "balwant1"
  ) {
    alert("Login Sucess");
  } else {
    password.classList.add("is-invalid");
    valid.preventDefault();
  }
});
