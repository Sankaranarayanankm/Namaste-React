import { CDN_URL } from "../utls/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="p-2 m-2 ">
      <img
        className="w-56 h-56 object-cover hover:scale-102 rounded  transition-all"
        src={CDN_URL + resData?.cloudinaryImageId}
        alt="res logo"
      />
      <h3 className="text-black font-bold font text-lg">{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")} </h4>
      <h4 className="text-yellow-300">{resData?.avgRating} stars </h4>
      <h4>{resData.sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
