function clickSubmit() {
  if (
    (checkRePassword(),
    checkPassword(),
    checkPhone(),
    checkEmail(),
    checkLasttName(),
    checkFirstName())
  ) {
    return true;
  }
  return false;
}

var regex;
function checkFirstName() {
  regex = /^[a-zA-Z]{10,15}$/;
  if (regex.test(firstNameId.value)) {
    return true;
  }

  firstNameLabel.innerHTML =
    "First Name: <br> <span> *use at least 10 character* </span>";
  firstNameLabel.style = "color:red";

  return false;
}

function checkLasttName() {
  regex = /^[a-zA-Z]{10,15}$/;
  if (regex.test(lastNameId.value)) {
    return true;
  }

  lastNameLabel.innerHTML =
    "Last Name: <br> <span> *use at least 10 character* </span>";
  lastNameLabel.style = "color:red";

  return false; 
}


function checkEmail() {}

function checkPhone() {}

function checkPassword() {}

function checkRePassword() {}
