import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utls/useRestaurantMenu";
import RestaruantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItem, setShowItem] = useState(1);

  if (resInfo == null) return <Shimmer />;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.categories;
  const { name, areaName, avgRating, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <ul>
        {categories?.map((item, index) => (
          <RestaruantCategory
            showItem={index === showItem}
            index={index}
            setShowItem={() => setShowItem(showItem == index ? null : index)}
            key={item.categoryId}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
