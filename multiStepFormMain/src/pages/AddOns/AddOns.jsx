import "./addons.css";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/button/Button.jsx";
import { DataContext } from "../../Provider.jsx";
import PickAddon from "../../components/PickAddon/PickAddon.jsx";
import HeaderSection from "../../components/HeaderSection/HeaderSection.jsx";
import Form from "../../components/Form/Form.jsx";
import ButtonsContainer from "../../components/button/ButtonsContainer.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function isChecked(array) {
  return array.some((element) => element.isSelected);
}
export default function AddOns() {
  const { userData, setNavIndex } = useContext(DataContext);
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const buttons = [
    {
      url: "/plan",
      text: "Go Back",
      classNm: "btnPrev",
      isActive: true,
    },
    {
      url: isActive ? "/summary" : "",
      text: "Next Step",
      classNm: "btnNext",
      isActive: isActive,
    },
  ];

  useEffect(() => {
    setNavIndex(2);
    setIsActive(isChecked(userData.addonsSelected));
    if (
      !userData.userName.isValid &&
      !userData.userEmail.isValid &&
      !userData.userPhone.isValid
    ) {
      toast("Please, fill the personal info form!");
      navigate("/")
    }
  }, []);

  return (
    <section className="addonsSection">
      <div className="container">
        <HeaderSection
          title={"Pick add-ons"}
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
      <ButtonsContainer>
        {buttons.map((props, i) => (
          <Button data={props} key={i} />
        ))}
      </ButtonsContainer>
    </section>
  );
}
