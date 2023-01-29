import React from 'react'
import LongTrade from '../LongTrade/LongTrade'
import './longtradelist.css'

const LongTradeList = ({trades}) => {

  const values = trades
  const listItems = values.map((value) => {
    return (<LongTrade props={value}/> )
  })  

  return (
    <div className="longtradelist">
        {listItems}
    </div>
  )
}

export default LongTradeList