import React, { useEffect } from "react";
import {RestaurantCard }from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

function filterData(searchText,restaurants){
const filterData = restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));

return filterData;
}

const Body = () => {
    
    
const [restaurants,setRestaurnts] =useState(resList)
    const [searchText,setSearchText]=useState();
    
//when we have empty dependency array the useEffet hook will be called after Initial Render. 
// when we have a dependency(searchText) array it will called first time when it renders + 
//It will be called everytime my dependency(searchText) changes 
//
    useEffect(()=>{
        console.log("this is called first time")
    },[searchText])

    console.log("render")

    return (


        <>
<div className="search-container"></div>
<input type="text"  
className="search-input" 
placeholder="Search" 
value={searchText}
onChange={(e)=>{
    setSearchText(e.target.value)

}}
/>
{/* Search Button Functionality */}
<button className="search-btn" onClick={(e)=>{
    const data = filterData(searchText,restaurants)
    setRestaurnts(data)
}}>search</button>



      <div className="restaurant-list">
        {restaurants.map((res) => {
          return <RestaurantCard {...res.data} key={res.data.id} />;
        })}
      </div>
      </>
    );
  };

  export default Body;