import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utls/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-auto w-6/12">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        onClick={handleClearCart}
        className="p-1 m-1 text-white bg-black rounded-lg"
      >
        Clear Cart
      </button>
      {cartItems.map((item) => {
        return <ItemList key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Cart;
