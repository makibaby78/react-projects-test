import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart } from '../../features/addToCart'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const cartToDisplay = useSelector((state)=>state.addToCartReducers.value)
  const dispatch = useDispatch();
  return (
    <div className='shoppingcart-wrapper sw smh'>
        {cartToDisplay.map((anyNameYouWant, index)=>{
          return(
            <div className='cart-item-wrapper' key={index}>
              <h5>Price:{anyNameYouWant.price}</h5>
              <h4>ID:{anyNameYouWant.id}</h4>
              <button onClick={()=>{dispatch(removeToCart({id:anyNameYouWant.id}))}}>delete</button>
            </div>
          )
        })}
    </div>
  )
}

export default ShoppingCart