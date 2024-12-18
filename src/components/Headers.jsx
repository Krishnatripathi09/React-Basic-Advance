import {  useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnClick,setBtnClick] = useState("Log-in")
    
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
            <li> <Link to="/">Home </Link> </li>
            <li ><Link to="/About">About </Link> </li>
            <li><Link to="/ContactUs">Contact-Us </Link></li>
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
