import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart } from '../../features/addToCart'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const cartToDisplay = useSelector((state)=>state.addToCartReducers.value)
  const dispatch = useDispatch();
  return (
    <div className='shoppingcart-wrapper sw smh'>
      <div className='shoppingcart-content-wrapper ssw spta'>
        <h1>SHOPPING CART</h1>
        {cartToDisplay.map((anyNameYouWant, index)=>{
          return(
            <div className='cart-item-wrapper' key={index}>
              <div className='cart-img'></div>
              <div className='cart-info'>
                <h5>Price:{anyNameYouWant.price}</h5>
                <p>{anyNameYouWant.para}</p>
                <button onClick={()=>{dispatch(removeToCart({id:anyNameYouWant.id}))}}>delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  ) 
}

export default ShoppingCart