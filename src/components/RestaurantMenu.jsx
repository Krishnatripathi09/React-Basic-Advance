import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useFetchMenu from "../utils/useFetchMenu";

const RestaurantMenu =() =>{
const {resId}=useParams();

const resInfo = useFetchMenu(resId)
if(resInfo==null) return <Shimmer />;


const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
const{itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
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