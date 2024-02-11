import "./addons.css";
import { useContext } from "react";
import { Button } from "../../components/Button.jsx";
import { DataContext } from "../../Provider.jsx";
import PickAddon from "../../components/PickAddon.jsx";

export default function AddOns() {
  const { addonSelected } = useContext(DataContext);

  return (
    <section className="addonsSection">
      <div className="container">
        <div className="pickAddonsWrapper">
          <h1>Pich add-ons</h1>
          <p>Add-ons help enhance gamin experience.</p>
          <div className="checkboxWrapper">
            <form className="addonForm">
              {addonSelected.map((addon, index) => (
                <PickAddon addon={addon} index={index} key={index} />
              ))}
            </form>
          </div>
        </div>
        <div className="buttonsContainer">
          <Button url={"/plan"} text={"Go Back"} index={1} />
          <Button url={"/summary"} text={"Next Step"} index={3} />
        </div>
      </div>
    </section>
  );
}
