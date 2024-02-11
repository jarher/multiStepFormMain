import "./plan.css";
import { useContext } from "react";
import { Button } from "../../components/Button.jsx";
import { DataContext } from "../../Provider.jsx";
import Card from "../../components/Card.jsx";

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
        <div className="planSelectionWrapper">
          <h1>Select your plan</h1>
          <p>You have the option of monthly o yearly billing.</p>
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
          <form className="planForm">
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
          </form>
        </div>
        <div className="buttonsContainer">
          <Button url={"/"} text={"Go Back"} index={0} />
          <Button url={"/addons"} text={"Next Step"} index={2} />
        </div>
      </div>
    </section>
  );
}
