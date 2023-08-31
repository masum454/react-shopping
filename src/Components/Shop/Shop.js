import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../../Cart/Cart';
import { addToDb, getDataDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getDataDb();
        let newProducts = [];
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                const quantity = storedCart[id];
                addedProducts.quantity = quantity

                newProducts.push(addedProducts)
            }
        }
        setCart(newProducts)
    }, [products])

    const handleAddToCart = (selectedProduct) => {

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]

        }

        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="gap-[45px] h-96 grid grid-cols-3 products-container">
                {
                    products.map(product => <Products
                        key={products.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container bg-[rgba(255,153,0,0.3)]">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;