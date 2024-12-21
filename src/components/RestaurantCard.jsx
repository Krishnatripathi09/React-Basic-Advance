import { CDN_URL } from "../utils/constants";



export const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;
  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
        className="res-image"
        alt="burger"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-2 text-lg ">{name}</h3>
      <h4 className="break-words max-w-full">{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};


export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="font-bold absolute bg-green-500 text-white m-2  rounded-md">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};