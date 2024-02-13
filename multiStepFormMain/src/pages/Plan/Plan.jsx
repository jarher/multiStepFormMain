import "./plan.css";
import { useContext } from "react";
import { Button } from "../../components/Button.jsx";
import { DataContext } from "../../Provider.jsx";
import Card from "../../components/Card/Card.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import Form from "../../components/Form/Form.jsx";

export default function Plan() {
  const { timePlan, changeTimePlan, selectAddon, data } =
    useContext(DataContext);

  const dataPlan =
    timePlan === "Monthly" ? data.monthly.plan : data.yearly.plan;

  selectAddon(
    timePlan === "Monthly" ? data.monthly.addons : data.yearly.addons
  );

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
              dataPlan={dataPlan}
              cardData={plan}
              index={index}
              key={index}
            />
          ))}
        </div>
        <Form>
          <div className="inputWrapper">
            <span
              className={`planName ${
                timePlan === "Monthly" ? "planSelected" : ""
              }`}
            >
              Monthly
            </span>
            <input
              type="range"
              name="switchPlanInput"
              id="switchPlanInput"
              min="0"
              max="1"
              defaultValue={timePlan === "Monthly" ? 0 : 1}
              onChange={(e) => {
                changeTimePlan(e.target.value === "0" ? "Monthly" : "Yearly");
              }}
            />
            <span
              className={`planName ${
                timePlan === "Yearly" ? "planSelected" : ""
              }`}
            >
              Yearly
            </span>
          </div>
        </Form>
      </div>
      <div className="buttonsContainer">
        <Button url={"/"} text={"Go Back"} index={0} classNm={"btnPrev"} />
        <Button
          url={"/addons"}
          text={"Next Step"}
          index={2}
          classNm={"btnNext"}
        />
      </div>
    </section>
  );
}
