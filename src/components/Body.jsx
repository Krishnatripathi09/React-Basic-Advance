import React from "react";
import {RestaurantCard }from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
    return (
      <div className="restaurant-list">
        {resList.map((res) => {
          return <RestaurantCard {...res.data} key={res.data.id} />;
        })}
      </div>
    );
  };

  export default Body;