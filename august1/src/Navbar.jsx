import React, { Component } from 'react'
import './navbar.css'

// Iconlarni olib kelish
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>

        <div className='navbar-items'>
          <p className='item'>About</p>
          <p className='item'>Menu</p>
          <p className='item'>Info</p>
          <p className='item'>Booking</p> 
        </div>

        <div className='navbar-logo'>

           Latte Cafe
           
        </div>

        <div className='navbar-icon'>

          <img className='icon' src={icon1} alt="" />
          <img className='icon' src={icon2} alt="" />
          <img className='icon' src={icon3} alt="" />

        </div>




      </div>
    )
  }
}
