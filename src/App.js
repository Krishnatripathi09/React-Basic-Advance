import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";

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

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
