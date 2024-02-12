/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Provider";

export function Button({ url, text, index, classNm}) {
  const { setNavIndex } = useContext(DataContext);
  return (
    // <button onClick={setNavIndex(index)} className={classNm}>
    //   <Link to={url}>{text}</Link>
    // </button>
    <button className={classNm}>
      <Link to={url}>{text}</Link>
    </button>
  );
}
