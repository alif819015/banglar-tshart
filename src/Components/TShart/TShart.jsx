import React from "react";

    const TShart = ({ tShirt, handleAddToCart}) => {
    const { picture, name, price, gender } = tShirt;
  return (
    <div className="text-center border border-indigo-600 rounded-md p-8">
      <img className="w-50 h-50 rounded-md" src={picture} alt="" />
      <h4 className="font-bold mt-5">{name}</h4>
      <p className="font-semibold">Price: ${price}</p>
      <p>{gender}</p>
      <div className="bg-violet-400 border-spacing-3 rounded-lg p-2">
      <button onClick={()=>handleAddToCart(tShirt)}>Bye Now</button>
      </div>
    </div>
  );
};

export default TShart;
