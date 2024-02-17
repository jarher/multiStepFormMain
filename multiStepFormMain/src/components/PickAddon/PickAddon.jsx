/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./pickAddon.css";
import { useContext, useState } from "react";
import { DataContext } from "../../Provider";

export default function PickAddon({ addon, index, setIsActive, isChecked }) {
  const { userData } = useContext(DataContext);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`pickWrapper ${
        isSelected || userData.addonsSelected[index].isSelected
          ? "elementSelected"
          : ""
      }`}
    >
      <input
        type="checkbox"
        name={`pickAddon${index}`}
        id={`pickAddon${index}`}
        defaultChecked={userData.addonsSelected[index].isSelected}
        onClick={(e) => {
          userData.addonsSelected[index].isSelected = e.target.checked;
          setIsActive(isChecked(userData.addonsSelected));
          setIsSelected(e.target.checked);
        }}
      />
      <div className="pickMainTextsWrapper">
        <span className="pickTitle">{addon.name}</span>
        <span className="pickDescription">{addon.description}</span>
      </div>
      <span className="pickPrice">{addon.price}</span>
    </div>
  );
}
