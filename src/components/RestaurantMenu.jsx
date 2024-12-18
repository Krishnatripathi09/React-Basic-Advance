import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu =() =>{
const [resInfo,setResInfo] = useState()
const {resId}=useParams();


useEffect(()=>{
fetchMenu()
},[])



const fetchMenu = async () => {
    const response = await fetch(MENU_API+resId);
    const json = await response.json();
    //console.log(json.data)
setResInfo(json.data)
}

if(resInfo==null) return <Shimmer />;


const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
const{itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
console.log(itemCards)
    return (
        <div className="restaurant-menu">
<h1>{name }</h1>
<p>{cuisines?.join(", ")}-{costForTwoMessage }</p>
<ul>
    {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} Rs-{item.card.info.price/100}</li>)}

</ul>
</div>
    )
}

export default RestaurantMenu;