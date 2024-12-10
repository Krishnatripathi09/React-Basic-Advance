import { RestrauntCard } from "./RestrauntCard";
import { useState } from "react";



const Body = () => {
    const [searchInput,setSearchInput]=useState("KFC")
    
    return (<>
    <div className="search-container">
 <input type="text" className="search-input" placeholder="search" value={searchInput}
 onChange={(e)=>{
    setSearchInput(e.target.value)
   
 }}
 
 />
 <button className="search-button">Search</button>
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