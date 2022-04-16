import React from 'react';
import './Header.css';
import Logo from '../../images/Sample Logo 1.png';

const Header = () => {
  return (
    <div className='Header'>
        <ul>
            <a href="#" className='ni'><li>Home</li></a>
            <a href="#" className='ni'><li>Cakes</li></a>
            <a href="#" className='logo'><li><img src={Logo} alt="logo" /></li></a>
            <a href="#" className='ni'><li>Cupcakes</li></a>
            <a href="#" className='ni'><li>Contact</li></a>
        </ul>
    </div>
  )
}

export default Header