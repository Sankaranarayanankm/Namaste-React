import { CDN_URL } from "../utls/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData?.cloudinaryImageId}
        alt="res logo"
      />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")} </h4>
      <h4>{resData?.avgRating} stars </h4>
      <h4>{resData.sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
