/* eslint-disable react/prop-types */
import "./userInfo.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Providers/Provider.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Form from "../../components/Form/Form";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import userInfoValidate from "../../Validator/userInfoValidate.js";

export default function UserInfo() {
  const { userData, setNavIndex } = useContext(DataContext);
  const {
    nameValidation,
    emailValidation,
    phoneValidation,
    nameValidity,
    emailValidity,
    phoneValidity,
  } = userInfoValidate(userData);
  
  const [isVisible, setIsVisible] = useState(false);

  const [isActive, setIsActive] = useState(true);

  const userInputData = [
    {
      nameClass: "userInfoWrapper",
      type: "text",
      name: "username",
      id: "username",
      labelText: "Name",
      ariaText: "write your name",
      isLegend: false,
      defaultValue: nameValidity.value,
      placeholder: "e.g. Stephen king",
      helperText: nameValidity,
      onChange: (e) => nameValidation(e.target.value),
      onBlur: null,
    },
    {
      nameClass: "userInfoWrapper",
      type: "email",
      name: "useremail",
      id: "useremail",
      labelText: "Email Address",
      ariaText: "write your Email Address",
      isLegend: false,
      defaultValue: emailValidity.value,
      placeholder: "e.g. stephenking@lorem.com",
      helperText: emailValidity,
      onChange: (e) => emailValidation(e.target.value),
      onBlur: null,
    },
    {
      nameClass: "userInfoWrapper",
      type: "tel",
      name: "userphone",
      id: "userphone",
      labelText: "Phone Number",
      ariaText: "write your Phone Number",
      isLegend: false,
      defaultValue: phoneValidity.value,
      placeholder: "e.g. +1 234 567 890",
      helperText: phoneValidity,
      onChange: (e) => phoneValidation(e.target.value),
      onBlur: null,
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
        <HeaderSection
          title={"Personal info"}
          description={
            " Please provide your name, email address, and phone number."
          }
        />
        <Form data={userInputData} />
      </div>
      <ButtonsContainer
        data={[
          {
            url: isActive ? "/plan" : "#",
            text: "Next Step",
            classNm: "btnNext",
            ariaText: "Go to plan section",
            isActive: isActive,
          },
        ]}
      />
    </section>
  );
}
