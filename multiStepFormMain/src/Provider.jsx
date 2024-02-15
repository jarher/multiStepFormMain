/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { data } from "./data.js";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  
  const [navbarIndex, setNavbarIndex] = useState(0);

  const [userData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    timePlan: "Monthly",
    planSelected: data.monthly.plan[0],
    addonsSelected: data.monthly.addons,
  });

 
  const setNavIndex = (value) => setNavbarIndex(value);

  return (
    <DataContext.Provider
      value={{
        userData,
        data,
        navbarIndex,
        setNavIndex
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
