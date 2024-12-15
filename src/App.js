import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import resList from "./utils/mockData";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img
            className="logo"
            src="https://cdn.dribbble.com/userupload/4288549/file/original-438b97178ade9d02cb34fd941adc6357.jpg?format=webp&resize=400x300&vertical=center"
          />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home </li>
            <li>About-Us </li>
            <li>Contact-Us </li>
            <li>Cart </li>
          </ul>
        </div>
      </div>
    </>
  );
};

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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-image"
        alt="burger"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
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

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div>
        <div className="res-container">
          {resList.map((restaurant, index) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
