/* eslint-disable react/prop-types */
import "./button.css";
import { Link } from "react-router-dom";

export function Button({data}) {
  const { url, text, classNm, ariaText, isActive } = data;
  return (
    <button className={classNm} disabled={!isActive ? true : false}>
      {(isActive && <Link to={url} aria-label={ariaText}>{text}</Link>) || <span>{text}</span>}
    </button>
  );
}
