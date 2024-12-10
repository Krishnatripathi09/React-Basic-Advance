import { IMG_URL } from "../constants";
const burgerKing = {
    name: "Burger King",
    image:IMG_URL,
    cusines: ["Burger", "American"],
    rating: "4.2",
  };
  


export const RestrauntCard = () => {
    return (
      <div className="card">
        <img src={burgerKing.image} />
        <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(", ")}</h3>
        <h4>{burgerKing.rating} stars</h4>
      </div>
    );
  };
