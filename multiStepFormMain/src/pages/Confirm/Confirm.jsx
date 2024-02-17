import "./confirm.css";
import thankyouIcon from "../../assets/images/icon-thank-you.svg";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Provider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Confirm() {
  const { userData, setNavIndex } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    setNavIndex(3);
    if (
      !userData.userName.isValid &&
      !userData.userEmail.isValid &&
      !userData.userPhone.isValid
    ) {
      toast("Please, fill the personal info form!");
      navigate("/");
    }
  }, []);
  return (
    <section className="confirmSection">
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
