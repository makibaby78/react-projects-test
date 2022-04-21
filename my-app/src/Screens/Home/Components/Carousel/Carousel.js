import { CarouselData } from './CarouselData'
import './Carousel.css'
import React, {useState, useEffect} from 'react'


const Carousel = () => {
  const [curMarginVal, setMarginVal] = useState(0);
  let interval;
  useEffect(()=>{
    interval =setInterval(() => {
      if(curMarginVal===200){
        setMarginVal(0);
      }else{
        setMarginVal(curMarginVal+100);
      }
    }, 3000);
    return()=>clearInterval(interval);
  }, [curMarginVal])
  const cbiOne = () => {
    setMarginVal(0);
  }
  const cbiTwo = () => {
    setMarginVal(100);
  }
  const cbiThree = () => {
    setMarginVal(200);
  }
  return (
    <div className='carousel-wrapper'>
        <div className='c-slider' style={{marginLeft: `-${curMarginVal}%` }}>
        {CarouselData.map((objectImage, index)=>{
                        return(
                                <div key={index} style={{ backgroundImage: `url('${objectImage.image}')` }} className="cs-item">
                          
                                </div>
                        )
                    })}
        </div>
        <div className='c-btn-wrapper'>
            <div onClick={cbiOne} className={curMarginVal === 0 ? 'cb-item cb-item-active' : 'cb-item'}></div>
            <div onClick={cbiTwo} className={curMarginVal === 100 ? 'cb-item cb-item-active' : 'cb-item'}></div>
            <div onClick={cbiThree}  className={curMarginVal === 200 ? 'cb-item cb-item-active' : 'cb-item'}></div>
        </div>
        <div className='c-title'>
          <h1>Let's Get Started With Kettle</h1>
          <button>PURCHASE NOW!</button>
        </div>
    </div>
  )
}

export default Carousel