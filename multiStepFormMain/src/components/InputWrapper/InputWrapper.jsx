/* eslint-disable react/prop-types */
import "./inputWrapper.css";
export default function InputWrapper({ data }) {
  const {
    nameClass,
    type,
    name,
    id,
    labelText,
    ariaText,
    isLegend,
    defaultValue,
    defaultChecked,
    placeholder,
    legend,
    helperText,
    onChange,
    onClick,
    onBlur
  } = data;
  return (
    <fieldset className={`inputWrapper ${nameClass}`} aria-label={ariaText}>
      <label>
        <span>{labelText}</span>
        {!helperText.isValid && (
          <span className="input-error">{helperText.text}</span>
        )}
      </label>
      {isLegend && (
        <legend>
          <span>{legend.description}</span>
          <span>{legend.price}</span>
        </legend>
      )}
      <input
        type={type}
        name={name}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        defaultChecked={defaultChecked}
        className={!helperText.isValid ? "userInfoWrapper--inputInvalid" : ""}
        required
      />
    </fieldset>
  );
}
