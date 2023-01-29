import React from 'react'
import './longtrade.css'

const LongTrade = ({props}) => {
  return (
    <div className="longtrade">
      <div className="horizontal-divider">
        <div className="maindata">
            <h1 className="longtrade-name">{props.username}</h1>
            <h1 className="longtrade-trade"><span className='give'>{props.give}</span> ↔ <span className='recieve'>{props.recieve}</span></h1>
        </div>
        <div className="subdata">
            <p className="longtrade-time">{props.time}</p>
            <p className="longtrade-loc">{props.loc}</p>
        </div>
      </div>  
    </div>
  )
}

export default LongTrade