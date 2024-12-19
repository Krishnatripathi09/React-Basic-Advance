import { RestaurantCard } from "./RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Body = () => {

const [listOfRestaurant,setListOfRestaurant] =useState([])
const [filteredRes,setFilteredRes] = useState([])
const [searchText,setSearchText] = useState("")


useEffect(()=>{
    fetchData()
},[])

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 
   };

   const onlineStatus =useOnlineStatus();

if(onlineStatus===false) return (
  <div className="inter-container">
    <h1>
      Ooops! Looks Like You're Offline ? Please check your Internet Connection :(
    </h1>
  </div>
)


    return listOfRestaurant.length===0 ? (<Shimmer/>) : ( 
      <div className="body">
        <div className="filter">
            <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
               const filtered = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
               setFilteredRes(filtered)

            }}>Search</button>
            </div>
            
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
            {filteredRes.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
              
            ))}
            
          </div>
        </div>
      </div>
    );
  };