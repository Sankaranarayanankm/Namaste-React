import { useDispatch } from "react-redux";
import { addItem } from "../utls/cartSlice";

const ItemList = (props) => {
  const { name, description, price } = props;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="border-b-1 border-gray-300 text-left p-3">
      <div>
        <div className="flex justify-between">
          <span>{name} </span>
          <span>Rs.{price / 100}</span>
        </div>
        <p className="text-xs">{description}</p>
        <button
          onClick={() => handleAddItem(props)}
          className="cursor-pointer px-2 border-1 rounded-md hover:bg-black hover:text-white transition-all"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemList;
