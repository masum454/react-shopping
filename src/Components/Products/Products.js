import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='w-[300px] h-[510px] border-[1px] border-solid border-[#95A0A7] rounded-[8px] relative mx-[50px] my-[100px]'>
            <img className='w-[286px] h-[286px] m-[7px]' src={img} alt="" />
            <div className='m-[7px] my-[14px]'>
                <p className='font-[Lato] not-italic text-[21px] font-normal leading-[25px] mb-0 mt-[5px]'>{name}</p>
                <p className='mb-0 mt-[5px]'>Price: ${price}</p>
                <p className='mb-0 mt-[5px]'>Seller: {seller}</p>
                <p className='mb-0 mt-[5px]'>Ratings: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='flex justify-center items-center bg-orange-300 hover:bg-orange-500 w-[100%] rounded-b-[5px] border-none bottom-0 p-4 absolute'>
                <p className='mr-[5px]'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;