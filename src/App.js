import React from "react";
import ReactDOM from "react-dom/client";
import Header, { Title } from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(", ")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  );
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
