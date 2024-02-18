/* eslint-disable react/prop-types */
import { createContext, useContext } from "react"
import { DataContext } from "./Provider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserStatesContext = createContext(); 

export default function UserStatesProvider({children}) {
  const { userData } = useContext(DataContext);
  const navigate = useNavigate();

  function isFilledForm(){
    if (
      !userData.userName.isValid ||
      !userData.userEmail.isValid ||
      !userData.userPhone.isValid
    ) {
      toast("Please, fill the personal info form first!");
      navigate("/");
    }
  }
  return (
    <UserStatesContext.Provider value={{isFilledForm}}>
      {children}
    </UserStatesContext.Provider>
  )
}
