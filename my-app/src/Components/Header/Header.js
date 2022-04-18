import React from 'react';
import './Header.css';
import Logo from '../../images/Sample Logo 1.png';

const Header = () => {
  return (
    <div className='Header'>
        <ul>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='ni'><li>Home</li></a>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='ni'><li>Cakes</li></a>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='logo'><li><img src={Logo} alt="logo" /></li></a>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='ni'><li>Cupcakes</li></a>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='ni'><li>Contact</li></a>
        </ul>
    </div>
  )
}

export default Header