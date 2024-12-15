import { RestaurantCard } from "./RestaurantCard";
import resList from "../utils/mockData";
export const Body = () => {
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                console.log("Clicked")
            }}
            onMouseOver={()=>{
                console.log("Mouse Over")
            }}>Top Rated Button</button>
        </div>
        <div>
          <div className="res-container">
            {resList.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
          </div>
        </div>
      </div>
    );
  };