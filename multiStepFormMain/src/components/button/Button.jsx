/* eslint-disable react/prop-types */
import "./button.css";
import { Link } from "react-router-dom";

export function Button({ url, text, classNm, isActive }) {
  return (
    <button
      className={classNm}
      disabled={!isActive ? true : false}
    >
      <Link to={isActive === true ? url : ""}>{text}</Link>
    </button>
  );
}
