import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    setListOfRestaurant(json.data.cards.slice(3));
    setFilteredRestaurant(json.data.cards.slice(3));
  };
  // conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurant.filter((item) =>
                item["info"]["name"]
                  ?.toLowerCase()
                  .includes(searchText?.toLocaleLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((item) => {
              return parseFloat(item.rating) > 4;
            });

            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((item) => {
          const obj = item.card.card.info;
          return (
            <div
              onClick={() => navigate(`/restaurants/${obj.id}`)}
              key={obj.id}
            >
              <RestaurantCard resData={obj} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
