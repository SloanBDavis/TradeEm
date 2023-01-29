import React from 'react'
import LongTradeList from './LongTradeList/LongTradeList'
import "./showtrades.css"
import { trades } from '../../Trades/trades'

const ShowTrades = (props) => {

  return (
    <div className="showtrade">
      <div className="margin-create">
        <div className="header">
          <h1 className='showtrades-header'>{props.query ? `Trades for ${props.query}` : "Search for Item..."}</h1>
          <div className="list-long">
            {props.query ? <LongTradeList trades={trades} query={props.query}/> : ""}
          
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ShowTrades