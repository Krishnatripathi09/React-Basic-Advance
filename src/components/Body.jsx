import { RestaurantCard } from "./RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
export const Body = () => {

const [listOfRestaurant,setListOfRestaurant] =useState([])


useEffect(()=>{
    fetchData()
},[])

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

 
   };

if(listOfRestaurant.length===0){
    return <Shimmer/>
}



    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
                setListOfRestaurant()
               const  filteredList =listOfRestaurant.filter((res)=>res.info.avgRating>4.2);
               setListOfRestaurant(filteredList)
            }}
            >Top Rated Button</button>
        </div>
        <div>
          <div className="res-container">
            {listOfRestaurant.map((restaurant) => (
              <RestaurantCard  key={restaurant.info.id}resData={restaurant} />
              
            ))}
            
          </div>
        </div>
      </div>
    );
  };