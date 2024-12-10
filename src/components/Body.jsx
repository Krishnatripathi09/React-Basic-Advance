import { RestrauntCard } from "./RestrauntCard";
import { useState } from "react";



const Body = () => {
    const [searchInput,setSearchInput]=useState("KFC")
    
    const [searchClicked,setSearchClicked] =useState("False")
    return (<>
    <div className="search-container">
 <input type="text" className="search-input" placeholder="search" value={searchInput}
 onChange={(e)=>{
    setSearchInput(e.target.value)
   
 }}
 
 />
 <h1>{searchClicked}</h1>
 <button className="search-button"
 onClick={()=>{
    if(searchClicked==="false"){
        setSearchClicked("True")
    } else{
        setSearchClicked("false")
    }
 }}
 >Search</button>
    </div>


      <div className="restaurant-list">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
      </>
    );
  };

  export default Body;