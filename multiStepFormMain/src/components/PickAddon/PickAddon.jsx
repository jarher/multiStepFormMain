/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./pickAddon.css";
import { useContext } from "react";
import { DataContext } from "../../Provider";

export default function PickAddon({ addon, index, setIsActive, isChecked }) {
  const { userData } = useContext(DataContext);

  return (
    <div className="pickWrapper">
      <input
        type="checkbox"
        name={`pickAddon${index}`}
        id={`pickAddon${index}`}
        defaultChecked={userData.addonsSelected[index].isSelected}
        onClick={(e) => {
          userData.addonsSelected[index].isSelected = e.target.checked;
          setIsActive(isChecked(userData.addonsSelected));
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
