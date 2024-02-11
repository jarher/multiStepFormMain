/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { data } from "./data.js";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [timePlan, setTimePlan] = useState("Monthly");
  const [planSelected, setPlanSelect] = useState(data.monthly.plan[0]);
  const [addonSelected, setAddonSelect] = useState(data.monthly.addons);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [navbarIndex, setNavbarIndex] = useState(0);

  const changeTimePlan = (value) => setTimePlan(value);
  const setPlan = (value) => setPlanSelect(value);
  const selectAddon = (value) => setAddonSelect(value);
  const setName = (value) => setUserName(value);
  const setEmail = (value) => setUserEmail(value);
  const setPhone = (value) => setUserPhone(value);
  const setNavIndex = (value) => setNavbarIndex(value);

  return (
    <DataContext.Provider
      value={{
        changeTimePlan,
        timePlan,
        data,
        setPlan,
        selectAddon,
        planSelected,
        addonSelected,
        setName,
        setEmail,
        setPhone,
        userName,
        userEmail,
        userPhone,
        navbarIndex,
        setNavIndex
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
