function clickSubmit() {
  if (
    (checkRePassword(),
    checkPassword(),
    checkPhone(),
    checkEmail(),
    checkLastName(),
    checkFirstName(),
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
    alert("true3");
    return true;
  }
  alert("false3");
  birthDateLabel.innerHTML += "<br> <small> * Must Be 18!* </small>";
  birthDateLabel.style = "color:red";
  return false;


}

function checkEmail() {
  regex =
    /(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@HELLO.com/;
  if (true) {
    return true;
  }

  return false;
}

function checkPhone() {}

function checkPassword() {}

function checkRePassword() {}
