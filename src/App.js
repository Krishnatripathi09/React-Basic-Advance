import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import { Header } from "./components/Headers";
import { Body } from "./components/Body";

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
