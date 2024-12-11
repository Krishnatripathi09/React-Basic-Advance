import { CDN_URL } from '../utils/constants';
import resList from '../utils/mockData';
const RestaurantCard = (props) => {
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
      <div
          className="res-card"
          style={{
              backgroundColor: '#f0f0f0',
          }}
      >
          {resList.map((res, index) => (
              <div key={index}>
                  <img
                      className="res-logo"
                      src={`${CDN_URL}${res.cloudinaryImageId}`}
                      alt={res.name}
                  />
                  <h3>{resData.name}</h3>
                  <h4>{res.cuisines.join(', ')}</h4>
                  <h4>{res.avgRating} stars</h4>
                  <h4>₹{res.costForTwo / 100} FOR TWO</h4>
                  <h4>{res.deliveryTime} minutes</h4>
              </div>
          ))}
      </div>
  );
  
};

export default RestaurantCard;