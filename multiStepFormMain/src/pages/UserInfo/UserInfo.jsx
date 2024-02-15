/* eslint-disable react/prop-types */
import "./userInfo.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Provider";
import { Button } from "../../components/button/Button.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Form from "../../components/Form/Form";
import { checkValidity } from "../../Validator/Validator.js";

export default function UserInfo() {
  const [nameValid, setNameValid] = useState({ isValid: true, text: "" });
  const [emailValid, setEmailValid] = useState({ isValid: true, text: "" });
  const [phoneValid, setPhoneValid] = useState({ isValid: true, text: "" });
  const [isActive, setIsActive] = useState(false);

  const { userData, setNavIndex } = useContext(DataContext);

  const userInputData = [
    {
      labelTitle: "name",
      inputType: "text",
      inputName: "username",
      inputPlaceholder: "e.g. Stephen king",
      defaultValue: userData.userName,
      changeHandle:(e) => userData.userName = e.target.value
    },
    {
      labelTitle: "Email Address",
      inputType: "email",
      inputName: "useremail",
      inputPlaceholder: "e.g. stephenking@lorem.com",
      defaultValue: userData.userEmail,
      changeHandle:(e) => userData.userEmail = e.target.value
    },
    {
      labelTitle: "Phone Number",
      inputType: "tel",
      inputName: "userphone",
      inputPlaceholder: "e.g. +1 234 567 890",
      defaultValue: userData.userPhone,
      changeHandle:(e) => userData.userPhone = e.target.value
    },
  ];
  // function checkData() {
  //   const  result  = checkValidity({ userName, userEmail, userPhone });
  //   console.log(result);
  //   setNameValid(result.nameValidity);
  //   setEmailValid(result.emailValidity);
  //   setPhoneValid(result.phoneValidity);
  //   nameValid.isValid && emailValid.isValid && phoneValid.isValid
  //     ? setIsActive(true)
  //     : setIsActive(false);
  // }
  function UserInput({ element }) {
    const {
      labelTitle,
      inputType,
      inputName,
      inputPlaceholder,
      defaultValue,
      changeHandle,
    } = element;
    return (
      <div className="userInputWrapper">
        <div className="labelWrapper">
          <label htmlFor="username">{labelTitle}</label>
          <span className="input-error">
            {!nameValid.isValid && nameValid.text}
          </span>
        </div>
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          placeholder={inputPlaceholder}
          defaultValue={defaultValue}
          onChange={changeHandle}
        />
      </div>
    );
  }

  useEffect(() => {
    setNavIndex(0);
  }, []);
  
  return (
    <section className="userInfoSection">
      <div className="container">
        <div className="formWrapper">
          <HeaderSection
            title={"Personal info"}
            description={
              " Please provide your name, email address, and phone number."
            }
          />
          <Form>
            {/* <div className="userInputWrapper">
              <div className="labelWrapper">
                <label htmlFor="username">name</label>
                <span className="input-error">
                  {!nameValid.isValid && nameValid.text}
                </span>
              </div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="e.g. Stephen king"
                defaultValue={userName}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={!nameValid.isValid && "inputInvalid"}
              />
            </div> */}
            {userInputData.map((element, index) => (
              <UserInput element={element} key={index} />
            ))}
          </Form>
        </div>
      </div>
      <div className="buttonsContainer">
        <Button
          url={"/plan"}
          text={"Next Step"}
          classNm={"btnNext"}
          isActive={isActive}
        />
      </div>
    </section>
  );
}
