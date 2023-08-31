import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='bg-[#1C2B35] text-[#FFFFFF] flex'>
            <img className='cursor-pointer' src={logo} alt="" />
            <div className='flex-1 text-right py-5'>
                <a className='' href="/shop">Shop</a>
                <a className='px-5' href="/order">Order</a>
                <a className='pr-5' href="inventory">Inventory</a>
                <a href="/about">About</a>
            </div>

        </nav>
    );
};

export default Header;