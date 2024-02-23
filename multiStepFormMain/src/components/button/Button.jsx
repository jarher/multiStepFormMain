/* eslint-disable react/prop-types */
import "./button.css";
import { Link } from "react-router-dom";

export function Button({data}) {
  const { url, text, classNm, ariaText } = data;
  return (
    <button className={classNm}>
      <Link to={url} aria-label={ariaText}>{text}</Link>
    </button>
  );
}
