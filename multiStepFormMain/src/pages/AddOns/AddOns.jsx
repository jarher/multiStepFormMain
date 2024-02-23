import "./addons.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Providers/Provider.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import Form from "../../components/Form/Form.jsx";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import { UserStatesContext } from "../../Providers/userStatesProvider";
// import getAddons from "../../utils/getAddons.js";
import isChecked from "../../utils/isChecked.js";
import pageTransition from "../../utils/pageTransition.js";
import getPrice from "../../utils/getPrice.js";

export default function AddOns() {
  const { userData, setNavIndex } = useContext(DataContext);
  const { isFilledForm } = useContext(UserStatesContext);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isChk01, setIsChk01] = useState(userData.addonsSelected[0].isSelected);
  const [isChk02, setIsChk02] = useState(userData.addonsSelected[1].isSelected);
  const [isChk03, setIsChk03] = useState(userData.addonsSelected[2].isSelected);

  const userInputStates = [
    [isChk01, setIsChk01],
    [isChk02, setIsChk02],
    [isChk03, setIsChk03],
  ];

  const userInputData = userData.addonsSelected.map((addon, index) => {
    return {
      nameClass: `addonsWrapper ${
        userInputStates[index][0] ? "elementSelected" : ""
      }`,
      type: "checkbox",
      name: `checkbox${index + 1}`,
      id: `checkbox${index + 1}`,
      labelText: addon.name,
      ariaText: addon.ariaText,
      isLegend: true,
      legend: {
        description: addon.description,
        price: getPrice(userData.timePlan, addon)
      },
      defaultChecked: addon.isSelected,
      helperText: { isValid: false },
      onClick: (e) => {
        addon.isSelected = e.target.checked;
        userInputStates[index][1](e.target.checked);
      },
    };
  });

  const buttons = [
    {
      url: "/plan",
      text: "Go Back",
      classNm: "btnPrev",
      ariaText: "Return to plan section",
      isActive: true,
    },
    {
      url: isActive ? "/summary" : "",
      text: "Next Step",
      classNm: "btnNext",
      ariaText: "Go to summary section",
      isActive: isActive,
    },
  ];

  useEffect(() => {
    setNavIndex(2);
    setIsActive(isChecked(userData.addonsSelected));
    isFilledForm();
    pageTransition(setIsVisible);
  }, []);

  useEffect(() => {
    isChk01 || isChk02 || isChk03 ? setIsActive(true) : setIsActive(false);
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [isChk01, isChk02, isChk03]);
  
  return (
    <section className={`addonsSection ${!isVisible ? "noVisible" : ""}`}>
      <div className="container">
        <HeaderSection
          title={"Pick add-ons"}
          description={"Add-ons help enhance gamin experience."}
        />
        <Form data={userInputData} />
      </div>
      <ButtonsContainer data={buttons} />
    </section>
  );
}
