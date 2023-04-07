import React from 'react';

const Cart = ({cart, handleRemoveFromCard}) => {
    return (
        <div>
            <h2 className='font-bold'>Order Summary: {cart.length}</h2>
            {
                cart.map(shirt=> <p key={shirt._id}>{shirt.name} <button onClick={()=> handleRemoveFromCard(shirt._id)} className='bg-red-500 px-2 rounded-lg'> X </button></p>)
            }
        </div>
    );
};

export default Cart;