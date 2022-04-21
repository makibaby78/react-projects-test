import './Header.css';
import Logo from '../../images/Sample Logo 1.png'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [headerVal, setHeaderVal]= useState('')
  const [headerStat, setHeaderStat] = useState('hide')
  
  function showHeader(){
    if(headerVal==='header-res-active'){
      setHeaderVal('')
      setHeaderStat('hide')
    }else{
      setHeaderVal('header-res-active')
      setHeaderStat('')
    }
  }
  function activeHeader(){
    if(headerVal==='header-res-active'){
      setHeaderVal('')
      setHeaderStat('hide')
    }else{
      setHeaderVal('header-res-active')
      setHeaderStat('')
    }
  }
  return (
    <div className='Header'>
      <div className='sw'>
        <div className='header-res-stat'>
          <div className='h-logo-wrapper'>
            <img width='100%' src={Logo} alt="logo" />
          </div>
          <div onClick={activeHeader} style={{ backgroundImage: "url('images/open white.png')" }} className='btn-ho'></div>
        </div>
        <ul className='header-def'>
            <Link to="/" className='ni'><li>Home</li></Link>
            <Link to="/cakes" className='ni'><li>Cakes</li></Link>
            <Link to="/" className='ni'><li><img src={Logo} alt="logo" /></li></Link>
            <Link to="/cakes" className='ni'><li>Cupcakes</li></Link>
            <Link to="/cakes" className='ni'><li>Contact</li></Link>
        </ul>
        <div className={`header-res ${headerVal}`}>
          <div onClick={showHeader} style={{ backgroundImage: "url('images/close white.png')" }} className={`btn-hc ${headerStat}`}></div>
            <ul>
                <Link to="/" class="header-res-logo"><li><img src={Logo} alt="logo" /></li></Link>
                <Link to="/"><li>Home</li></Link>
                <Link to="/cakes"><li>Cakes</li></Link>
                <Link to="/cupcakes"><li>Cupcakes</li></Link>
                <Link to="/contacts"><li>Contact</li></Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header