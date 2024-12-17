import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
    const [btnClick,setBtnClick] = useState("Log-in")
    console.log("Header Rendered")

    //If no Dependency array ==> useEffect is called after every Render;
    //If Empty-dependency array then useEffect is called on initial Render(Just Once)
    //If dependency array is btnClick ==> then it is called everyTime btnClick is updated
    useEffect(()=>{
        console.log("useEffect Called")
    },[btnClick])
  return (
    <>
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>

        <div className="nav-items">
          <ul>
            <li > Home </li>
            <li>About-Us </li>
            <li>Contact-Us </li>
            <li>Cart </li>
            <button className="login" onClick={()=>{
               btnClick==="Log-in" ? setBtnClick("Log-Out") : setBtnClick("Log-in")
            }}>{btnClick}</button>
          </ul>
        </div>
      </div>
    </>
  );
};
