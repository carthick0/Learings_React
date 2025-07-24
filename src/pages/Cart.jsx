import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow mb-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-32 w-24 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className=" text-gray-950 font-bold">Total Price: <span className="text-green-600">₹{item.price * item.quantity}</span> </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
            
          </div>
        ))
      )}

      <span className=" flex justify-end text-3xl font-bold">Grand Total: ₹{cartItems.reduce(
        (total,item)=>total+item.price*item.quantity,0).toFixed(2)
      }</span>
    </div>
  );
}

export default Cart;
