import React from 'react'
import './Order.css'
import ProductData from '../../Products/ProductData'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/addToCart'

const Order = () => {
  const dispatch = useDispatch();
  return (
    <div className='order-wrapper ssw smh'>
      <div className='sw order-content-wrapper spta'>
        <h1>PRODUCTS</h1>
        <div className='products-wrapper'>
          {ProductData.map((products)=>{
            return(
              <div className='order-card' key={products.id}>
                <div className='card-item-order' style={{ backgroundImage: `url('${products.image}')` }}>
                </div>
                <div className='card-description-order'>
                  <h5>{products.description}</h5>
                  <h5>${products.price}</h5>
                </div>
                <button className='universal-btn' onClick={()=>{dispatch(addToCart({id:`${products.id}`, price:`${products.price}`, para:`${products.para}`, link:`${products.link}`, description:`${products.description}`}))}}>Add to Cart!</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Order