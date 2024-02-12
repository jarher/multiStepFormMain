function nameValidate(value) {
  const regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
  return regexName.test(value);
}

function emailValidate(value) {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regexEmail.test(value);
}

function phoneValidate(value) {
  const regexPhone = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g;
  return regexPhone.test(value);
}

export function checkValidity({ userName, userEmail, userPhone }) {
  const result = {
    nameValidity: {
      isValid: false,
      text: "This field is required",
    },
    emailValidity: {
      isValid: false,
      text: "This field is required",
    },
    phoneValidity: {
      isValid: false,
      text: "This field is required",
    },
  };
  if (userName !== "") {
    (result.nameValidity.isValid = nameValidate(userName)),
      (result.nameValidity.text =
        "The name must have an initial capital letter");
  }
  if (userEmail !== "") {
    (result.nameValidity.isValid = emailValidate(userName)),
      (result.nameValidity.text = "Incorrect email");
  }
  if (userPhone !== "") {
    (result.nameValidity.isValid = phoneValidate(userName)),
      (result.nameValidity.text = "Incorrect phone number");
  }
  return result;
}
