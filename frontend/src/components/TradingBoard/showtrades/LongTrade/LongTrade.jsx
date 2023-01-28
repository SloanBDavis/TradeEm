import React from 'react'
import './longtrade.css'

const LongTrade = ({props}) => {
  return (
    <div className="longtrade">
      <div className="horizontal-divider">
        <div className="maindata">
            <h1 className="longtrade-name">Sloan Davis</h1>
            <h1 className="longtrade-trade"><span className='give'>Hose</span> ↔ <span className='recieve'>Sweatshirt</span></h1>
        </div>
        <div className="subdata">
            <p className="longtrade-time">Time: 9:00PM</p>
            <p className="longtrade-loc">Location: Quad</p>
        </div>
      </div>  
    </div>
  )
}

export default LongTrade