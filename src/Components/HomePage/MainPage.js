import React from 'react'
import AdFour from './AdFour/AdFour';
import AdOne from './AdOne/AdOne';
import './MainPage.css';
const MainPage = () => {
  return (
    <div className='mainpage'>
    
    <div className='allads'>
      <AdOne/>
      <AdFour/>
      <AdOne/>
      <AdFour/>
      <AdOne/>
      <AdFour/>
    
    </div>
    </div>
  )
}

export default MainPage