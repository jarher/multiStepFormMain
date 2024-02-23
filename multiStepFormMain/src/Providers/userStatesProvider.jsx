/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { DataContext } from "./Provider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isChecked from "../utils/isChecked";

export const UserStatesContext = createContext();
//Display an error message when any form is not filled out properly
export default function UserStatesProvider({ children }) {
  const { userData } = useContext(DataContext);
  const navigate = useNavigate();

  function isFilledForm() {
    if (
      !userData.userName.isValid ||
      !userData.userEmail.isValid ||
      !userData.userPhone.isValid
    ) {
      toast("Please, fill the personal info form first!");
      navigate("/");
    }
    if(!isChecked(userData.addonsSelected)){
        toast("Please, fill the add-ons form first!");
        navigate("/addons");
      }
  }
  return (
    <UserStatesContext.Provider value={{ isFilledForm }}>
      {children}
    </UserStatesContext.Provider>
  );
}
