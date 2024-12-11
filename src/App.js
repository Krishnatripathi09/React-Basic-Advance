import Body from "./components/Body";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
