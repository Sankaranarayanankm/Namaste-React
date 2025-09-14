import RestaurantCard from "./RestaurentCard";
import { RESTAURANT_LIST } from "../utls/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(RESTAURANT_LIST);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((item) => {
              return parseFloat(item.rating) > 4;
            });

            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((item) => (
          <RestaurantCard resData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
