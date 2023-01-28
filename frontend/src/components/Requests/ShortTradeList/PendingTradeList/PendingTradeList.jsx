import React from 'react'
import ShortTrade from '../../ShortTrade/ShortTrade'
import './pendingtradelist.css'

const PendingTradeList = ({trades}) => {
  return (
    <div className="pending-tradelist">
        <ShortTrade/>
        <ShortTrade/>
        <ShortTrade/>
        <ShortTrade/>
    
    </div>
  )
}

export default PendingTradeList