import React from "react"
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

  return (
    <div>
   
    {items.map(item => <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
   
        <div className="w-8/12">
        <div className="py-2">
           <span>{item.card.info.name}</span>
        <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
        </div>
       <p className="text-xs">{item.card.info.description}</p>

       
       </div>

       <div className="w-4/12 p-4 relative">
  <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg" />
  <button className="absolute inset-x-6 bottom-2 mx-auto px-3 py-0.5 bg-white text-green-600 text-sm font-bold rounded-lg shadow-md border border-gray-300">
    ADD +
  </button>
</div>



       

    </div>)}
  
    </div>
  )
};

export default ItemList;
