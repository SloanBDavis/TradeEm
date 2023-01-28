import React, {useState} from 'react'
import CreateTrades from './createtrades/CreateTrades'
import ShowTrades from './showtrades/ShowTrades'
import AddTrades from './addtrades/AddTrades'
import "./tradingboard.css"
import Search from './Search/Search'

const TradingBoard = (props) => {

  const [query, setQuery] = useState("");

  const handleSearchSubmit = (event) => {

  }

  return (
    <div className="tradingboard">
        <div className="trading-header">
          <h1 className="tr-heading">{props.id}'s Trading Board</h1>
        </div>
        <div className="trade-components">
          <ShowTrades query={query}/>
          <div className="create-and-add">
            <CreateTrades/>
            <AddTrades/>
          </div>
          <Search onQuery={setQuery}/>
        </div>
    </div>
  )
}

export default TradingBoard