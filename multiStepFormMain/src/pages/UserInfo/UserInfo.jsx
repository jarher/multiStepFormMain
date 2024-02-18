/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Providers/Provider.jsx";
import { Button } from "../../components/button/Button.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Form from "../../components/Form/Form";
import UserInput from "../../components/UserInput/UserInput.jsx";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import {
  emailValidate,
  nameValidate,
  phoneValidate,
} from "../../Validator/Validator.js";

export default function UserInfo() {
  const { userData, setNavIndex } = useContext(DataContext);

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
  const [isVisible, setIsVisible] = useState(false);

  const [isActive, setIsActive] = useState(true);

  const userInputData = [
    {
      labelTitle: "Name",
      inputType: "text",
      inputName: "username",
      defaultValue: nameValidity.value,
      inputPlaceholder: "e.g. Stephen king",
      helperText: nameValidity,
      changeHandle: (e) => setNameValidity(nameValidate(e.target.value)),
    },
    {
      labelTitle: "Email Address",
      inputType: "email",
      inputName: "useremail",
      defaultValue: emailValidity.value,
      inputPlaceholder: "e.g. stephenking@lorem.com",
      helperText: emailValidity,
      changeHandle: (e) => setEmailValidity(emailValidate(e.target.value)),
    },
    {
      labelTitle: "Phone Number",
      inputType: "tel",
      inputName: "userphone",
      defaultValue: phoneValidity.value,
      inputPlaceholder: "e.g. +1 234 567 890",
      helperText: phoneValidity,
      changeHandle: (e) => setPhoneValidity(phoneValidate(e.target.value)),
    },
  ];

  useEffect(() => {
    setNavIndex(0);
    setIsActive(
      nameValidity.isValid && emailValidity.isValid && phoneValidity.isValid
        ? true
        : false
    );
    setIsVisible(true);
  }, []);

  useEffect(() => {
    userData.userName.value = nameValidity.value;
    userData.userName.isValid = nameValidity.isValid;
    userData.userEmail.value = emailValidity.value;
    userData.userEmail.isValid = nameValidity.isValid;
    userData.userPhone.value = phoneValidity.value;
    userData.userPhone.isValid = phoneValidity.value;

    setIsActive(
      nameValidity.isValid && emailValidity.isValid && phoneValidity.isValid
        ? true
        : false
    );
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [nameValidity, emailValidity, phoneValidity]);

  return (
    <section className={`userInfoSection ${!isVisible ? "noVisible" : ""}`}>
      <div className="container">
        <div className="formWrapper">
          <HeaderSection
            title={"Personal info"}
            description={
              " Please provide your name, email address, and phone number."
            }
          />
          <Form>
            {userInputData.map((element, index) => (
              <UserInput element={element} key={index} />
            ))}
          </Form>
        </div>
      </div>
      <ButtonsContainer>
        <Button
          data={{
            url: isActive ? "/plan" : "#",
            text: "Next Step",
            classNm: "btnNext",
            ariaText:"Go to plan section",
            isActive: isActive,
          }}
        />
      </ButtonsContainer>
    </section>
  );
}
