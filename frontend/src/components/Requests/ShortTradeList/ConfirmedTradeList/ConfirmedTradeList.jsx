import React from 'react'
import ShortTrade from '../../ShortTrade/ShortTrade'
import './confirmedtradelist.css'

const ConfirmedTradeList = ({trades}) => {
  return (
    <div className="confirmed-tradelist">
        <ShortTrade/>
        <ShortTrade/>
        <ShortTrade/>
        <ShortTrade/>
    
    </div>
  )
}

export default ConfirmedTradeList