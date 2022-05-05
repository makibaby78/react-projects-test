import React from 'react'
import cart from '../../images/cart-icon-white.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Headerv2 = () => {
    const cartToDisplay = useSelector((state)=>state.addToCartReducers.value)
  return (
    <div className='header-second ssw'>
    <Link to="/shoppingCart">
      <div className='cart-wrapper sw'>
          <img width='100%' src={cart} alt='cart-icon'/>
          <span>{cartToDisplay.length}</span>
      </div>
    </Link>
  </div>
  )
}

export default Headerv2