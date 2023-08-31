import React from 'react';

const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }

    const tax = total * 0.3

    const grandTotal = parseFloat((total + shipping + tax).toFixed(2));
    return (
        <div className='sticky top-0 px-[30px] py-[30px]'>
            <h1 className='text-[20px] mb-6 font-bold'>Shop</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:${tax}</p>
            <h1 className='font-bold'>Grand Total:${grandTotal}</h1>
        </div>
    );
};

export default Cart;