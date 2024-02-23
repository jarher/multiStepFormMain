import "./plan.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Providers/Provider.jsx";
import Card from "../../components/Card/Card.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import InputRange from "../../components/InputRange/InputRange.jsx";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import { UserStatesContext } from "../../Providers/userStatesProvider.jsx";
import pageTransition from "../../utils/pageTransition.js";
import saveInLocalStorage from "../../utils/saveLocally.js";
import changeIsSelected from "../../utils/changeIsSelected.js";

export default function Plan() {
  const { userData, setNavIndex } = useContext(DataContext);
  const { isFilledForm } = useContext(UserStatesContext);
  const [cardIndex, setCardIndex] = useState(
    userData.planSelected.filter((plan) => plan.isSelected)[0].planIndex
  );
  const [isVisible, setIsVisible] = useState(false);
  const [dataPlan, setDataPlan] = useState(userData.planSelected);
  const [timePlan, changeTimePlan] = useState(userData.timePlan);

  const buttons = [
    {
      url: "/",
      text: "Go Back",
      classNm: "btnPrev",
      ariaText: "Return to user info form",
      isActive: true,
    },
    {
      url: "/addons",
      text: "Next Step",
      classNm: "btnNext",
      ariaText: "Goto user Add-ons section",
      isActive: true,
    },
  ];

  useEffect(() => {
    setNavIndex(1);
    isFilledForm();
    pageTransition(setIsVisible);
  }, []);

  useEffect(() => {
    changeIsSelected(userData, cardIndex);
    setDataPlan(userData.planSelected);
    saveInLocalStorage(userData);
  }, [cardIndex]);

  return (
    <section className={`planSection ${!isVisible ? "noVisible" : ""}`}>
      <div className="container">
        <HeaderSection
          title={"Select your plan"}
          description={"You have the option of monthly o yearly billing."}
        />

        <div className="cardWrapper">
          {dataPlan.map((plan, index) => (
            <Card
              data={{ plan, timePlan, cardIndex, setCardIndex, index }}
              key={index}
            />
          ))}
        </div>
        <InputRange data={{ timePlan, changeTimePlan }} />
      </div>
      <ButtonsContainer data={buttons} />
    </section>
  );
}
