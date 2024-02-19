import "./addons.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Providers/Provider.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import Form from "../../components/Form/Form.jsx";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import { UserStatesContext } from "../../Providers/userStatesProvider";
import getAddons from "../../utils/getAddons.js";
import isChecked from "../../utils/isChecked.js";
import pageTransition from "../../utils/pageTransition.js";

export default function AddOns() {
  const { userData, setNavIndex } = useContext(DataContext);
  const { isFilledForm } = useContext(UserStatesContext);
  
  const [addonsIndex, setAddonsIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isChk01, setIsChk01] = useState(
    getAddons(userData, addonsIndex, 0).isSelected
  );
  const [isChk02, setIsChk02] = useState(
    getAddons(userData, addonsIndex, 1).isSelected
  );
  const [isChk03, setIsChk03] = useState(
    getAddons(userData, addonsIndex, 2).isSelected
  );

  const userInputData = [
    {
      nameClass: `addonsWrapper ${isChk01 ? "elementSelected" : ""}`,
      type: "checkbox",
      name: "checkbox1",
      id: "checkbox1",
      labelText: getAddons(userData, addonsIndex, 0).name,
      ariaText: getAddons(userData, addonsIndex, 0).ariaText,
      isLegend: true,
      legend: {
        description: getAddons(userData, addonsIndex, 0).description,
        price: getAddons(userData, addonsIndex, 0).price,
      },
      defaultChecked: getAddons(userData, addonsIndex, 0).isSelected,
      helperText: { isValid: false },
      onClick: (e) => {
        getAddons(userData, 0, 0).isSelected = e.target.checked;
        getAddons(userData, 1, 0).isSelected = e.target.checked;
        setIsActive(
          isChecked(userData.addonsSelected[0] && userData.addonsSelected[1])
        );
        setIsChk01(e.target.checked);
      },
    },
    {
      nameClass: `addonsWrapper ${isChk02 ? "elementSelected" : ""}`,
      type: "checkbox",
      name: "checkbox2",
      id: "chekcbox2",
      labelText: getAddons(userData, addonsIndex, 1).name,
      ariaText: getAddons(userData, addonsIndex, 1).ariaText,
      isLegend: true,
      legend: {
        description: getAddons(userData, addonsIndex, 1).description,
        price: getAddons(userData, addonsIndex, 1).price,
      },
      defaultChecked: getAddons(userData, addonsIndex, 1).isSelected,
      helperText: { isValid: false },
      onClick: (e) => {
        getAddons(userData, 0, 1).isSelected = e.target.checked;
        getAddons(userData, 1, 1).isSelected = e.target.checked;
        setIsActive(
          isChecked(userData.addonsSelected[0] && userData.addonsSelected[1])
        );
        setIsChk02(e.target.checked);
      },
    },
    {
      nameClass: `addonsWrapper ${isChk03 ? "elementSelected" : ""}`,
      type: "checkbox",
      name: "checkbox3",
      id: "username",
      labelText: getAddons(userData, addonsIndex, 2).name,
      ariaText: getAddons(userData, addonsIndex, 2).ariaText,
      isLegend: true,
      legend: {
        description: getAddons(userData, addonsIndex, 2).description,
        price: getAddons(userData, addonsIndex, 2).price,
      },
      defaultChecked: getAddons(userData, addonsIndex, 2).isSelected,
      helperText: { isValid: false },
      onClick: (e) => {
        getAddons(userData, 0, 2).isSelected = e.target.checked;
        getAddons(userData, 1, 2).isSelected = e.target.checked;
        setIsActive(
          isChecked(userData.addonsSelected[0] && userData.addonsSelected[1])
        );
        setIsChk03(e.target.checked);
      },
    },
  ];

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
    setIsActive(
      isChecked(userData.addonsSelected[0] && userData.addonsSelected[1])
    );
    isFilledForm();
    setAddonsIndex(userData.timePlan === "Monthly" ? 0 : 1);
    pageTransition(setIsVisible);
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [isActive]);

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
