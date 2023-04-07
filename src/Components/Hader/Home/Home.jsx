import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShart from "../../TShart/TShart";
import Cart from "../../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirts) => {
    const exist = cart.find((ts) => ts._id === tShirts._id);
    if (exist) {
      toast("Already added this item!");
    } else {
      const newCart = [...cart, tShirts];
      setCart(newCart);
    }
    //   const newCart = [...cart, tShirts];
    //   setCart(newCart);
  };

  const handleRemoveFromCard = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="grid grid-cols-4 gap-4 my-8 mx-5">
      <div className="grid grid-cols-3 gap-4 col-span-3">
        <ToastContainer />
        {tShirts.map((tShirt) => (
          <TShart
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShart>
        ))}
      </div>
      <div className="col-span-1">
        <Cart cart={cart} handleRemoveFromCard={handleRemoveFromCard}></Cart>
      </div>
    </div>
  );
};

export default Home;
