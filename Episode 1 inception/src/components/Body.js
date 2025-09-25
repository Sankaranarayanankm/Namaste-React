import RestaurantCard, { withRestarurantArea } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const RestaurantCardWithArea = withRestarurantArea(RestaurantCard);
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
      <div className="flex">
        <div className="p-1 m-2 ">
          <input
            type="text"
            className=" border-gray-500 border mr-3"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-2 py-1 bg-gray-600 rounded-sm text-white cursor-pointer  hover:text-gray-500 hover:bg-white hover:border-gray-600 hover:border transition-all"
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
        <div className="p-1">
          <button
            className="px-2 py-1 text-white bg-violet-500 hover:text-violet-500 hover:bg-white rounded  my-1 mt-2 hover:border hover:border-violet-500 transition-all cursor-pointer "
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((item) => {
          const obj = item.card.card.info;
          return (
            <div
              className="p-2 m-2 border w-[250px] hover:shadow-gray-500 hover:shadow-lg cursor-pointer bg-gray-300 rounded-md"
              onClick={() => navigate(`/restaurants/${obj.id}`)}
              key={obj.id}
            >
             
              {obj.areaName == "Koramangala" ? (
                <RestaurantCardWithArea resData={obj} />
              ) : (
                <RestaurantCard resData={obj} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
