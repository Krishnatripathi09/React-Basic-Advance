import { useState } from "react";
import { LOGO_URL } from "../utils/constants";




export const Header = () => {
    const [btnClick,setBtnClick] = useState("Log-in")
    console.log("Header Rendered")
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
            <li href=""> Home </li>
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
