/* eslint-disable react/prop-types */
import "./userInput.css";
export default function UserInput({ element }) {
  const {
    labelTitle,
    inputType,
    inputName,
    defaultValue,
    inputPlaceholder,
    helperText,
    changeHandle,
  } = element;

  return (
    <div className="userInputWrapper">
      <div className="labelWrapper">
        <label htmlFor="username">{labelTitle}</label>
        <span className="input-error">
          {!helperText.isValid && helperText.text}
        </span>
      </div>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        defaultValue={defaultValue}
        placeholder={inputPlaceholder}
        onChange={changeHandle}
        onBlur={changeHandle}
        className={!helperText.isValid ? "inputInvalid" : ""}
        required
      />
    </div>
  );
}
