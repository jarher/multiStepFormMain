/* eslint-disable react/prop-types */
import "./button.css";
import { Link } from "react-router-dom";

export function Button({data}) {
  const { url, text, classNm, isActive } = data;
  return (
    <button className={classNm} disabled={!isActive ? true : false}>
      {(isActive && <Link to={url}>{text}</Link>) || <span>{text}</span>}
    </button>
  );
}
