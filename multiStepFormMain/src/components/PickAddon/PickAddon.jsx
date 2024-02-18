/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./pickAddon.css";
import { useContext, useState } from "react";
import { DataContext } from "../../Providers/Provider";

export default function PickAddon({ addon, index, setIsActive, isChecked }) {
  const { userData } = useContext(DataContext);
  const [isSelected, setIsSelected] = useState(false);

  function getAddons(firstIndex, secondIndex) {
    return userData.addonsSelected[firstIndex][secondIndex];
  }
  return (
    <div
      className={`pickWrapper ${
        isSelected ||
        getAddons(0, index).isSelected ||
        getAddons(1, index).isSelected
          ? "elementSelected"
          : ""
      }`}
    >
      <input
        type="checkbox"
        name={`pickAddon${index}`}
        id={`pickAddon${index}`}
        defaultChecked={
          getAddons(0, index).isSelected || getAddons(1, index).isSelected
        }
        onClick={(e) => {
          getAddons(0, index).isSelected = e.target.checked;
          getAddons(1, index).isSelected = e.target.checked;
          setIsActive(
            isChecked(userData.addonsSelected[0] && userData.addonsSelected[0])
          );
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
