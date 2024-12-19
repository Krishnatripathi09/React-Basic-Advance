import {  useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
    const [btnClick,setBtnClick] = useState("Log-in")
    
    const onlineStatus =useOnlineStatus()
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
            <li>Online Status:{onlineStatus ? "✅": "🔴"}</li>
            <li> <Link to="/">Home </Link> </li> 
            <li ><Link to="/About">About </Link> </li>
            <li><Link to="/ContactUs">Contact-Us </Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
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
