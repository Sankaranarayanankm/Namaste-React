import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utls/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw Error("Failed to fetch data");
      }
      const resData = await response.json();
      setResInfo(resData.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (resInfo == null) return <Shimmer />;

  const cardsList =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;
  const { name, areaName, avgRating, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {areaName}-{avgRating}
      </p>

      <p>{cuisines.join(", ")}</p>
      <h2>Menu</h2>
      <ul>
        {cardsList.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.price / 100 ||
              item.card.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
