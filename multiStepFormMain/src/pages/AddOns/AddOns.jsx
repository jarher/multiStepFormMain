import "./addons.css";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/button/Button.jsx";
import { DataContext } from "../../Providers/Provider.jsx";
import PickAddon from "../../components/PickAddon/PickAddon.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import Form from "../../components/Form/Form.jsx";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import { UserStatesContext } from "../../Providers/userStatesProvider";

function isChecked(array) {
  return array.some((element) => element.isSelected);
}
export default function AddOns() {
  const { userData, setNavIndex } = useContext(DataContext);
  const { isFilledForm } = useContext(UserStatesContext);
  const [addonsIndex, setAddonsIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    setIsVisible(true);
    setAddonsIndex(userData.timePlan === "Monthly" ? 0 : 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [isActive]);

  console.log(userData);
  return (
    <section className={`addonsSection ${!isVisible ? "noVisible" : ""}`}>
      <div className="container">
        <HeaderSection
          title={"Pick add-ons"}
          description={"Add-ons help enhance gamin experience."}
        />
        <Form>
          {userData.addonsSelected[addonsIndex].map((addon, index) => (
            <PickAddon
              addon={addon}
              index={index}
              setIsActive={setIsActive}
              isChecked={isChecked}
              key={index}
            />
          ))}
        </Form>
      </div>
      <ButtonsContainer>
        {buttons.map((props, i) => (
          <Button data={props} key={i} />
        ))}
      </ButtonsContainer>
    </section>
  );
}
