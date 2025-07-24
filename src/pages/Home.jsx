import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch=useDispatch();
  const inputRef=useRef();


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddToCart=(product)=>{
    dispatch(addCart(product));
  }

  return (
    <div className="p-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-96 p-2 mb-6 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 mt-12 ml-10"
      />

      <div className="flex flex-wrap gap-6 justify-center">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow w-64 hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <img
              className="h-40 w-full object-contain mb-2"
              src={product.image}
              alt={product.title}
            />
            <h3 className="text-md font-semibold mb-1">{product.title}</h3>
            <p className="text-sm text-gray-700 mb-2">
              {product.description.slice(0, 60)}...
            </p>
            <p className="font-bold text-green-600">₹ {product.price}</p>
            <button className="w-[50%] h-8 my-2 bg-lime-200"
              onClick={()=>handleAddToCart(product)}
            >

             Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
