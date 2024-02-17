export function nameValidate(value) {
  const regex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
  const isValid = regex.test(value);
  return {
    value,
    isValid,
    text:
      value === ""
        ? "This field is required"
        : !isValid
        ? "The name must have an initial capital letter"
        : "",
  };
}

export function emailValidate(value) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isValid = regex.test(value);
  return {
    value,
    isValid,
    text:
      value === "" ? "This field is required" : !isValid ? "Invalid Email" : "",
  };
}

export function phoneValidate(value) {
  const regex = /^(\+?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{3}$/g;
  const isValid = regex.test(value);
  return {
    value,
    isValid,
    text:
      value === ""
        ? "This field is required"
        : !isValid
        ? "Invalid phone number"
        : "",
  };
}
