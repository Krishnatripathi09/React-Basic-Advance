import React from "react";
import ReactDOM from "react-dom/client";
import Header, { Title } from "./components/Header";
import { Footer } from "./components/Footer";
import resList from "./utils/mockData";
import { CDN_URL } from "./utils/constants";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const burgerKing = {
  name: "Burger King",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zxlwn9pn8ztsba8ehzu",
  cusines: ["Burger", "American"],
  rating: "4.2",
};

export const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  slaString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h2>{avgRating} Stars</h2>
      <h4>{slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
{
resList.map((res)=>{
  return <RestrauntCard {...res.data}/>
}) 
  }
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
