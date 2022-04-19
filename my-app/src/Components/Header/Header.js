import './Header.css';
import Logo from '../../images/Sample Logo 1.png'
import React, {useState} from 'react'

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
    console.log(headerVal)
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
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='ni'><li>Home</li></a>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='ni'><li>Cakes</li></a>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='logo'><li><img src={Logo} alt="logo" /></li></a>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='ni'><li>Cupcakes</li></a>
            <a href="https://github.com/ionic-team/stencil/issues/1374" className='ni'><li>Contact</li></a>
        </ul>
        <div className={`header-res ${headerVal}`}>
          <div onClick={showHeader} style={{ backgroundImage: "url('images/close white.png')" }} className={`btn-hc ${headerStat}`}></div>
            <ul>
                <a href="#block-two"><li>About</li></a>
                <a href="#block-three"><li>Skills</li></a>
                <a href="#block-four"><li>Portfolio</li></a>
                <a href="#block-five"><li>Experience</li></a>
                <a href="#block-six"><li>Education</li></a>
                <a href="#block-eight"><li>Contact</li></a>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header