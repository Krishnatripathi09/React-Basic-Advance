import { CDN_URL } from "../utils/constants";



export const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-image"
        alt="burger"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100} Rs for Two</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};
