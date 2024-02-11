import "./userInfo.css";
import { useContext } from "react";
import { DataContext } from "../../Provider";
import { Button } from "../../components/Button";

export default function UserInfo() {
  const {
    setName,
    setEmail,
    setPhone,
    userName,
    userEmail,
    userPhone,
  } = useContext(DataContext);

  return (
    <section className="userInfoSection">
      <div className="container">
        <div className="formWrapper">
          <h1 className="formTitle">Personal info</h1>
          <p className="formDescription">
            Please provide your name, email address, and phone number.
          </p>
          <form>
            <div className="inputWrapper">
              <label htmlFor="username">name</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="e.g. Stephen king"
                defaultValue={userName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="useremail">Email Address</label>
              <input
                type="email"
                name="useremail"
                id="useremail"
                placeholder="e.g. stephenking@lorem.com"
                defaultValue={userEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="userphone">Phone Number</label>
              <input
                type="tel"
                name="userphone"
                id="userphone"
                placeholder="e.g. +1 234 567 890"
                defaultValue={userPhone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="buttonsContainer">
          <Button url={"/plan"} text={"next"} index={1} />
        </div>
      </div>
    </section>
  );
}
