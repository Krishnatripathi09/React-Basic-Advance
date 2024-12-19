import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useFetchMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useFetchMenu;
