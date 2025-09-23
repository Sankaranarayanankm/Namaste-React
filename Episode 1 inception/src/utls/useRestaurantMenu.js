import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const respose = await fetch(MENU_API + resId);
      if (!respose.ok) {
        throw new Error("Failed to fetch menu details");
      }
      const resData = await respose.json();
      setResInfo(resData.data);
    } catch (error) {
      console.log(error);
    }
  }
  return resInfo;
};

export default useRestaurantMenu;
