import React from 'react'
import './tradingpage.css'
import TradingBoard from '../TradingBoard/TradingBoard'
import Requests from '../Requests/Requests'
import { useParams } from 'react-router-dom'

const TradingPage = () => {

  const {id} = useParams()

  return (
    <div className="trading-board">
        <div className="header">
          <h1>Tradem.</h1>
        </div>
        <Requests/>
        <TradingBoard id={id}/>
    </div> 
  )
}

export default TradingPage