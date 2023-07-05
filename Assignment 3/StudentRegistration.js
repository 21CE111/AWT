function validation(e) {
  let fname = document.getElementById("fullname").value;
  let fnameError = document.getElementById("fullnameError");
  var nameRegex = /^[a-zA-Z]+$/;
  if (!fname.match(nameRegex)) {
    e.preventDefault(e);
    fnameError.textContent = "*Please Enter Valid Full Name";
  } else if (fname.length < 5) {
    e.preventDefault(e);
    fnameError.textContent = "*At least five character required";
  } else fnameError.textContent = "";

  let userName = document.getElementById("username").value;
  let userNameError = document.getElementById("usernameError");
  let userNameRegex = /^[a-zA-Z0-9_]+$/;
  if (!userName.match(userNameRegex)) {
    e.preventDefault(e);
    userNameError.textContent = "*Please Enter Valid User Name";
  } else if (fname.length < 5) {
    e.preventDefault(e);
    userNameError.textContent = "*At least five character required";
  } else {
    userNameError.textContent = "";
  }

  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("pswError");
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.match(passwordRegex)) {
    e.preventDefault(e);
    passwordError.textContent =
      "*Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character required";
  } else if (password.length < 8) {
    e.preventDefault(e);
    passwordError.textContent = "*Enter at least 8 character password";
  } else {
    let cpassword = document.getElementById("confirm-password").value;
    let cpasswordError = document.getElementById("CnfpswError");
    if (!(password === cpassword && cpassword !== "")) {
      e.preventDefault(e);
      cpasswordError.textContent =
        "*Confirm password does not match with password";
    }
  }

  let phone = document.getElementById("phone").value;
  let phoneError = document.getElementById("phoneError");
  let phoneRegex = /^[0-9]+$/;
  if (!phone.match(phoneRegex)) {
    e.preventDefault(e);
    phoneError.textContent = "*Please Enter Valid Phone Number";
  } else if (phone.length < 10) {
    e.preventDefault(e);
    phoneError.textContent = "*Exact 10 Number required";
  } else {
    phoneError.textContent = "";
  }

  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email.match(emailRegex)) {
    e.preventDefault(e);
    emailError.textContent = "*Enter a valid email.";
  } else emailError.textContent = "";

  let gender = document.getElementsByName("gender");
  let GenderError = document.getElementById("GenderError");
  if (!gender[0].checked && !gender[1].checked) {
    e.preventDefault();
    GenderError.textContent = "*Select your gender.";
  } else {
    GenderError.textContent = "";
  }

  let state = document.getElementById("state");
  let stateError = document.getElementById("stateError");
  if (state.value === "default") {
    e.preventDefault();
    stateError.textContent = "*Select your state.";
  } else {
    stateError.textContent = "";
  }

  let agreement = document.getElementById("agreement");
  let agree = document.getElementById("agree");
  if (!agreement.checked) {
    e.preventDefault();
    agree.textContent = "*You must agree to the terms and conditions.";
  } else {
    agree.textContent = "";
  }
}

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  validation(e);
});
