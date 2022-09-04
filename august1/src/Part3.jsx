import React, { Component } from 'react'
import './part3.css'
import menu from './menu.png'


export default class Part3 extends Component {
  render() {
    return (
      <div className='part3container'>



        <div className='menu0'>

        <div className='menu1'>Menu</div>
        <br />

        <div className='menu2'>We change our menu every season. Here is what we are currently dishing up.</div>
        <br />
        <div className='menu3'>Food Menu</div>
        <br />
        <div className='menu4'>Drinks Menu</div>
        <br />
        <div className='menu5'>TakeAway Menu</div>

        </div>

        <div>

        <img className='menupic' src={menu} alt="" />
        
        </div>

      </div>
    )
  }
}
