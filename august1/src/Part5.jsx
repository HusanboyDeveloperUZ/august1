import React, { Component } from 'react'
import './part5.css'
import vino from './vino.png'
import tort from './tort.png'
import deraza from './deraza.png'

export default class Part5 extends Component {
  render() {
    return (
      <div className='part5'>

        <div className='wrap'>
        <img  className='rasm1' src={vino} alt="" />
        <img  className='rasm2' src={tort} alt="" />
        </div>

      

        <div className='wrap2'>
        <img className='rasm3' src={deraza} alt="" />
        </div>

      </div>
    )
  }
}
