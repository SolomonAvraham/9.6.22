function clickSubmit() {
  if ((checkPassword(),
    checkPhone()&&
    checkEmail()&&
    checkLastName()&&
    checkFirstName()&&
    birthDate())
  ) {
    return true;
  }
  return false;
}

var regex;

function checkFirstName() {
  regex = /^[a-zA-Z]{10,}$/;
  if (regex.test(firstNameId.value)) {
    return true;
  }
  firstNameLabel.innerHTML +=
    "<br><small > *Use at least 10 character* </small>";
  firstNameLabel.style = "color:red";
  return false;
}

function checkLastName() {
  regex = /^[a-zA-Z]{10,}$/;
  if (regex.test(lastNameId.value)) {
    return true;
  }
  lastNameLabel.innerHTML +=
    "<br> <small> *use at least 10 character* </small>";
  lastNameLabel.style = "color:red";
  return false;
}

function birthDate() {
  if (birthDateId.value <= "2004-01-01") {
    return true;
  }
  birthDateLabel.innerHTML += "<br> <small> * Must Be 18!* </small>";
  birthDateLabel.style = "color:red";
  return false;
}

function checkEmail() {
  regex =
    /(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@HELLO.com/;
  if (regex.test(emailId.value)) {
    return true;
  }
  return false;
}

function checkPhone() {
  regex =
    /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/;

  if (regex.test(telId.value)) {
    return true;
  }
  telLabel.innerHTML +=
    "<br><small>*Must Enter This Format 050-1111111*</small>";
  telLabel.style.color = "red";
  return false;
}

function checkPassword() {
  var strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,12})/;
  if (password1Id.value == password2Id.value) {
    if (strongRegex.test(password1Id.value == password2Id.value)) {
      return true;
    }
    password1Label.innerHTML += "<br>*<small>Password is not strong enough</small>*";
    password1Label.style.color = "red";
    return false;
    
  }
  password2Label.innerHTML += "<br>*<small>Passwords not match</small>*";
  password2Label.style.color = "red";
  return false;
}
