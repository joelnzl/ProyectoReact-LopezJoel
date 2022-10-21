import React from 'react';
import CartWidget from './CartWidget';
import Button from './Button';



export const Navbar = () => {
    return (
        <nav className='navbar'>
        
        <a className="navbar-brand" href="#">TYLER, THE CREATOR - OFFICIAL MERCHANDISING</a>

        
        
        <CartWidget/>
        <Button/>
        
    </nav>
    );
  };
  
  export default Navbar;