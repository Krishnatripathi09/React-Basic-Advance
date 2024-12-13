import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
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
        fetchDataFromSwiggy();
    },[])

  async function fetchDataFromSwiggy(){
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
const json = await data.json();
console.log(json)
}
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
        {restaurants.map((restaurant) => {
          return <RestaurantCard resData={restaurant} key={restaurant.data.id} />;
        })}
      </div>
      </>
    );
  };

  export default Body;