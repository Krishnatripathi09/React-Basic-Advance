import { RestaurantCard } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {

const [listOfRestaurant,setListOfRestaurant] =useState([ {
    data: {
      name: "Kannur Food Point",
      uuid: "51983905-e698-4e31-b0d7-e376eca56320",
      city: "1",
      area: "Tavarekere",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 3,
      
        deliveryTime: 24,
        minDeliveryTime: 24,
        
      
      avgRating: "3.9",
     
    },
  },
    {
    data: {
      name: "Domino's",
      uuid: "51986905-e698-4e31-b0d7-e376eca56320",
      city: "1",
      area: "Tavarekere",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 3,
      
        deliveryTime: 24,
        minDeliveryTime: 24,
        
      
      avgRating: "4.9",
     
    },
  },
  {
    data: {
      name: "MCD's",
      uuid: "51996905-e698-4e31-b0d7-e376eca56320",
      city: "1",
      area: "Tavarekere",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 3,
      
        deliveryTime: 24,
        minDeliveryTime: 24,
        
      
      avgRating: "4.9",
     
    },
  },])




    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
                setListOfRestaurant()
               const  filteredList =listOfRestaurant.filter((res)=>res.data.avgRating>4);
               setListOfRestaurant(filteredList)
            }}
            >Top Rated Button</button>
        </div>
        <div>
          <div className="res-container">
            {listOfRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
          </div>
        </div>
      </div>
    );
  };