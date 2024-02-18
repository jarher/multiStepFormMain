import "./plan.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Providers/Provider.jsx";
import Card from "../../components/Card/Card.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import Form from "../../components/Form/Form.jsx";
import { Button } from "../../components/button/Button.jsx";
import InputRange from "../../components/InputRange/InputRange.jsx";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import { UserStatesContext } from "../../Providers/userStatesProvider.jsx";

export default function Plan() {
  const { userData, data, setNavIndex } = useContext(DataContext);
  const { isFilledForm } = useContext(UserStatesContext);
  const [timePlan, changeTimePlan] = useState(userData.timePlan);
  const [cardIndex, setCardIndex] = useState(userData.planSelected.planIndex);
  const [isVisible, setIsVisible] = useState(false);

  const dataPlan =
    timePlan === "Monthly" ? data.monthly.plan : data.yearly.plan;

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
    setIsVisible(true);
  }, []);

  useEffect(() => {
    userData.timePlan = timePlan;
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [timePlan, cardIndex]);

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
              cardData={plan}
              dataPlan={dataPlan}
              cardIndex={cardIndex}
              setCardIndex={setCardIndex}
              timePlan={timePlan}
              index={index}
              key={index}
            />
          ))}
        </div>
        <Form>
          <InputRange timePlan={timePlan} changeTimePlan={changeTimePlan} />
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
