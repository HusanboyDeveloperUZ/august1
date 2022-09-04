import React, { Component } from 'react'
import screen from './screen.png'
import './Body.css'

export default class Body extends Component {
  render() {
    return (
      <div className='bodycontainer'>
        <img className='body-screen' src={screen} alt="" />
      </div>
    )
  }
}
