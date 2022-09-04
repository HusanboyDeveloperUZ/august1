import React, { Component } from 'react'
import './part4.css'

export default class Part4 extends Component {
  render() {
    return (
      <div className='part4container'>

        <div>
            <div className='text12'>Location</div>
            <div className='text12'>101 Cuba st, Te Aro Washinton</div>
        </div>
        <div>
            <div className='text21'>Hours</div>
            <div className='text31'> Tuesday to Friday 7:30 AM -3PM</div>
            <div className='text41'>Saturday to Sunday 8AM - 3PM</div>
        </div>
        <div>
            <div className='text51'>Mondays</div>

            <div className='text61'>We are closed on Mondays to reflect and to refuel</div>

        </div>
    

      </div>
    )
  }
}
