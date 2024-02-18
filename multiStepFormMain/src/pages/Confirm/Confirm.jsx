import "./confirm.css";
import thankyouIcon from "../../assets/images/icon-thank-you.svg";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../Providers/Provider";
import { UserStatesContext } from "../../Providers/userStatesProvider";

export default function Confirm() {
  const { setNavIndex } = useContext(DataContext);
  const { isFilledForm } = useContext(UserStatesContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setNavIndex(3);
    isFilledForm();
    setIsVisible(true);
  }, []);

  return (
    <section className={`confirmSection ${!isVisible ? "noVisible" : ""}`}>
      <div className="container">
        <img src={thankyouIcon} alt="thank you icon" />
        <HeaderSection
          title={"Thank you!"}
          description={
            "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
          }
        />
      </div>
    </section>
  );
}
