
import { useState } from "react";
import { emailValidate, nameValidate, phoneValidate } from "./Validator";

export default function UserInfoValidate(userData) {
  const [nameValidity, setNameValidity] = useState({
    value: userData.userName.value,
    isValid: userData.userName.isValid,
    text: "",
  });
  const [emailValidity, setEmailValidity] = useState({
    value: userData.userEmail.value,
    isValid: userData.userEmail.isValid,
    text: "",
  });
  const [phoneValidity, setPhoneValidity] = useState({
    value: userData.userPhone.value,
    isValid: userData.userPhone.isValid,
    text: "",
  });

  function nameValidation(value){
    return setNameValidity(nameValidate(value));
  }
  function emailValidation(value) {
    return setEmailValidity(emailValidate(value));
  }
  function phoneValidation(value) {
    return setPhoneValidity(phoneValidate(value));
  }
  return {
    nameValidation,
    emailValidation,
    phoneValidation,
    nameValidity,
    emailValidity,
    phoneValidity,
  };
}
