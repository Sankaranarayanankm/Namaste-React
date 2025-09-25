const ItemList = (props) => {
  const { name, description, price } = props;
  return (
    <div className="border-b-1 border-gray-300 text-left p-3">
      <div>
        <div className="flex justify-between">
          <span>{name} </span>
          <span>Rs.{price / 100}</span>
        </div>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ItemList;
