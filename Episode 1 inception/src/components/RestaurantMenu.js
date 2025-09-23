import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utls/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

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
        {cardsList?.map((item) => (
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
