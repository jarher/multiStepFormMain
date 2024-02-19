/* eslint-disable react/prop-types */
import "./inputWrapper.css";
export default function InputWrapper({ data }) {
  const {
    nameClass,
    type,
    name,
    id,
    labelText,
    isLegend,
    defaultValue,
    placeholder,
    legend,
    helperText,
    changeHandle,
  } = data;
  return (
    <fieldset className={`inputWrapper ${nameClass}`}>
      <label>
        <span>{labelText}</span>
        {!helperText.isValid && (
          <span className="input-error">{helperText.text}</span>
        )}
      </label>
      {isLegend && (
        <legend>
          <span>{`${legend.description}`}</span>
          <span>${legend.price}</span>
        </legend>
      )}
      <input
        type={type}
        name={name}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={changeHandle}
        onBlur={changeHandle}
        className={!helperText.isValid ? "userInfoWrapper--inputInvalid" : ""}
        required
      />
    </fieldset>
  );
}
