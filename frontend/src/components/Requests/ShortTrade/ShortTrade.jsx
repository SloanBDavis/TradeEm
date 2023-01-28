import React from 'react'
import './ShortTrade.css'

const ShortTrade = ({props}) => {
  return (
    <div className="shorttrade">
        <h1 className="shorttrade-name">Matthew Wang</h1>
        <h1 className="shorttrade-trade"><span className='give'>Hose</span> ↔ <span className='recieve'>Sweatshirt</span></h1>
        <p className="shorttrade-time">Time: 9:00PM</p>
        <p className="shorttrade-loc">Location: Quad</p>
    </div>
  )
}

export default ShortTrade