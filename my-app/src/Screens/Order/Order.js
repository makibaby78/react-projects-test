import React from 'react'
import ProductData from '../Products/ProductData'
import './Order.css'

const Order = () => {
  return (
    <div className='order-wrapper ssw'>
      <div className='order-content-wrapper sw'>
      {ProductData.map((objectImage, index)=>{
                        return(
                          <div className='order-card'>
                                <div className="card-item-order" key={index} style={{ backgroundImage: `url('${objectImage.image}')` }}>
                                </div>
                                <div className='card-description-order'>
                                    <h4>{objectImage.description}</h4>
                                    <span>Price: {objectImage.price}</span>
                                </div>
                          </div>
                        )
          })}
      </div>
    </div>
  )
}

export default Order