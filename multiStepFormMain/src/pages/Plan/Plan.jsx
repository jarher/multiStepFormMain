import "./plan.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Provider.jsx";
import Card from "../../components/Card/Card.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import Form from "../../components/Form/Form.jsx";
import { Button } from "../../components/button/Button.jsx";
import InputRange from "../../components/InputRange/InputRange.jsx";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Plan() {
  const { userData, data, setNavIndex } = useContext(DataContext);
  const [timePlan, changeTimePlan] = useState(userData.timePlan);
  const [cardIndex, setCardIndex] = useState(userData.planSelected.planIndex);

  const dataPlan =
    timePlan === "Monthly" ? data.monthly.plan : data.yearly.plan;

  userData.addonsSelected =
    timePlan === "Monthly" ? data.monthly.addons : data.yearly.addons;

  const navigate = useNavigate();

  const buttons = [
    {
      url: "/",
      text: "Go Back",
      classNm: "btnPrev",
      isActive: true,
    },
    {
      url: "/addons",
      text: "Next Step",
      classNm: "btnNext",
      isActive: true,
    },
  ];

  useEffect(() => {
    setNavIndex(1);
    if (
      !userData.userName.isValid &&
      !userData.userEmail.isValid &&
      !userData.userPhone.isValid
    ) {
      toast("Please, fill the personal info form!");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    userData.timePlan = timePlan;
  }, [timePlan]);

  return (
    <section className="planSection">
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
