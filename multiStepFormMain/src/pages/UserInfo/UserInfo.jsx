/* eslint-disable react/prop-types */
import "./userInfo.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Provider";
import { Button } from "../../components/Button";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Form from "../../components/Form/Form";
import { checkValidity } from "../../Validator/Validator.js";

export default function UserInfo() {
  const [nameValid, setNameValid] = useState({ isValid: true, text: "" });
  const [emailValid, setEmailValid] = useState({ isValid: true, text: "" });
  const [phoneValid, setPhoneValid] = useState({ isValid: true, text: "" });
  const [isActive, setIsActive] = useState(true);

  const { setName, setEmail, setPhone, userName, userEmail, userPhone } =
    useContext(DataContext);

  const userInputData = [
    {
      labelTitle: "name",
      inputType: "text",
      inputName: "username",
      inputPlaceholder: "e.g. Stephen king",
      defaultValue: userName,
    },
    {
      labelTitle: "Email Address",
      inputType: "email",
      inputName: "useremail",
      inputPlaceholder: "e.g. stephenking@lorem.com",
      defaultValue: userEmail,
    },
    {
      labelTitle: "Phone Number",
      inputType: "tel",
      inputName: "userphone",
      inputPlaceholder: "e.g. +1 234 567 890",
      defaultValue: userPhone,
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
    const { labelTitle, inputType, inputName, inputPlaceholder, defaultValue } = element;
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
        />
      </div>
    );
  }

  useEffect(()=>{

  },[]);
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
          url={isActive && "/plan"}
          text={"Next Step"}
          index={1}
          classNm={"btnNext"}
        />
      </div>
    </section>
  );
}
