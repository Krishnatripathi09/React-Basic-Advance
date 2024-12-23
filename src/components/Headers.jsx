import {  useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
    const [btnClick,setBtnClick] = useState("Log-in")
    const onlineStatus =useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)

    //subscribing to store using selector
    const cartItems = useSelector((store)=>store.cart.items)
  
  return (
    <>
      <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-100">
        <div > 
          <img
            className="w-36"
            src={LOGO_URL}
          />
        </div>

        <div className="flex items-center ">
          <ul className="flex p-4 ">
            <li className="px-4">Online Status:{onlineStatus ? "✅": "🔴"}</li>
            <li className="px-4" > <Link to="/">Home </Link> </li> 
            <li className="px-4" ><Link to="/About">About </Link> </li>
            <li className="px-4"><Link to="/ContactUs">Contact-Us </Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold text-xl" ><Link to="/cart">Cart({cartItems.length} items)</Link> </li>
            <button className="login" onClick={()=>{
               btnClick==="Log-in" ? setBtnClick("Log-Out") : setBtnClick("Log-in")
            }}>{btnClick}</button>
             <li className="px-4" >{loggedInUser} </li>
          </ul>
        </div>
      </div>
    </>
  );
};
