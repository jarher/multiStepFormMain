/* eslint-disable react/prop-types */
import "./userInfo.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Providers/Provider.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Form from "../../components/Form/Form";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import userInfoValidate from "../../Validator/userInfoValidate.js";
import pageTransition from "../../utils/pageTransition.js";
import saveInLocalStorage from "../../utils/saveLocally.js";
import isChecked from "../../utils/isChecked.js";

function asignValues(userInfo, validity) {
  userInfo.forEach((element, index) => {
    element.value = validity[index].value;
    element.isValid = validity[index].isValid;
  });
}
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

  const userInfo = [
    {
      type: "text",
      name: "username",
      labelText: "Name",
      ariaText: "write your name",
      validities: [nameValidity, nameValidation],
      placeholder: "e.g. Stephen king",
    },
    {
      type: "email",
      name: "useremail",
      labelText: "Email Address",
      ariaText: "write your Email Address",
      validities: [emailValidity, emailValidation],
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      type: "tel",
      name: "userphone",
      labelText: "Phone Number",
      ariaText: "write your Phone Number",
      validities: [phoneValidity, phoneValidation],
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  const userInputData = userInfo.map((info) => {
    return {
      nameClass: "userInfoWrapper",
      type: info.type,
      name: info.name,
      id: info.name,
      labelText: info.labelText,
      ariaText: info.ariaText,
      isLegend: false,
      defaultValue: info.validities[0].value,
      placeholder: info.placeholder,
      helperText: info.validities[0],
      onChange: (e) => info.validities[1](e.target.value),
      onBlur: null,
    };
  });

  useEffect(() => {
    setNavIndex(0);
    setIsActive(isChecked([nameValidity, emailValidity, phoneValidity]));
    pageTransition(setIsVisible);
  }, []);

  useEffect(() => {
    asignValues(
      [userData.userName, userData.userEmail, userData.userPhone],
      [nameValidity, emailValidity, phoneValidity]
    );

    setIsActive(isChecked([nameValidity, emailValidity, phoneValidity]));
    saveInLocalStorage(userData);
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
