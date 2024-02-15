import "./addons.css";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/button/Button.jsx";
import { DataContext } from "../../Provider.jsx";
import PickAddon from "../../components/PickAddon/PickAddon.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import Form from "../../components/Form/Form.jsx";

function isChecked(array) {
  return array.some((element) => element.isSelected);
}
export default function AddOns() {
  const { userData, setNavIndex } = useContext(DataContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setNavIndex(2);
    setIsActive(isChecked(userData.addonsSelected));
  }, []);

  return (
    <section className="addonsSection">
      <div className="container">
        <HeaderSection
          title={"Pich add-ons"}
          description={"Add-ons help enhance gamin experience."}
        />
        <Form>
          {userData.addonsSelected.map((addon, index) => (
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
      <div className="buttonsContainer">
        <Button
          url={"/plan"}
          text={"Go Back"}
          classNm={"btnPrev"}
          isActive={true}
        />
        <Button
          url={"/summary"}
          text={"Next Step"}
          classNm={"btnNext"}
          isActive={isActive}
        />
      </div>
    </section>
  );
}
