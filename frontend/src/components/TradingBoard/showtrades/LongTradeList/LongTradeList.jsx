import React, {useState} from 'react'
import LongTrade from '../LongTrade/LongTrade'
import './longtradelist.css'

const LongTradeList = ({trades, query}) => {

  const values = trades
  const listItems = values.map((value) => {
    return (
      (value.recieve === query) && (<LongTrade props={value}/>))
  })  

  return (
    <div className="longtradelist">
        {listItems}
    </div>
  )
}

export default LongTradeList