import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgC-F1sV7Bis8bwmZSQj7VEhTM8gV0FxBHg&s"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zxlwn9pn8ztsba8ehzuu" />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <RestrauntCard />
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
