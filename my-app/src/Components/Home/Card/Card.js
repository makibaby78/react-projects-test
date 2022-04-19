import React from 'react'

const Card = () => {
 const cardData = [
     {
     image: 'images/Brown Cake.jpg',
     id: 'yeah',
     }
 ]
  return (
    <div className='card-content-wrapper'>
        <div className='card-wrapper'>
        {cardData.map((objectImage, index)=>{
                        return(
                                <div key={index} style={{ backgroundImage: `url('${objectImage.image}')` }} className="card-item">
                                    {objectImage.id}
                                </div>
                        )
                    })}
        </div>
    </div>
  )
}

export default Card