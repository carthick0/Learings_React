import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../utils/userContext";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-pink-100 h-16 px-4 flex items-center w-full shadow">
      <ul className="flex space-x-4 text-lg font-semibold ml-auto list-none items-center">
        <li className="p-2">
          <Link to="/home">Home</Link>
        </li>

        {!user && (
          <li className="p-2">
            <Link to="/login">Login</Link>
          </li>
        )}

        {user && (
          <>
            <li className="p-2">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2 relative">
              <Link to="/cart">
                🛒 Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-4 bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="p-2">
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
