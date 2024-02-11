/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { DataContext } from "../Provider";

export default function PickAddon({ addon, index }) {
  const {addonSelected} = useContext(DataContext);
  const [isSelected, setIsSelected] = useState(addon.isSelected);
  addon.isSelected = isSelected;

  return (
    <div className="pickWrapper">
      <input
        type="checkbox"
        name={`pickAddon${index}`}
        id={`pickAddon${index}`}
        defaultChecked={isSelected}
        defaultValue={addon.addonKey}
        onClick={(e) => {
          setIsSelected(() => (isSelected ? false : true));
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
