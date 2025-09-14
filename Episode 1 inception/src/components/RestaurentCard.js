const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo" src={resData.image} alt="res logo" />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")} </h4>
      <h4>{resData?.rating} </h4>
      <h4>{resData?.deliveryTime} </h4>
    </div>
  );
};

export default RestaurantCard;
