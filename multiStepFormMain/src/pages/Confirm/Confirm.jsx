import "./confirm.css";
import thankyouIcon from "../../assets/images/icon-thank-you.svg";

export default function Confirm() {
  return (
    <section className="confirmSection">
      <div className="container">
        <img src={thankyouIcon} alt="thank you icon" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at
          <a href="mailto:support@loremgaming.com"></a>.
        </p>
      </div>
    </section>
  );
}
