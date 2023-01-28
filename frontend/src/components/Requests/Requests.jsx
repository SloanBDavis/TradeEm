import React from 'react'
import './reqests.css'
import ConfirmedTradeList from './ShortTradeList/ConfirmedTradeList/ConfirmedTradeList'
import PendingTradeList from './ShortTradeList/PendingTradeList/PendingTradeList'

const Requests = () => {
  return (
    <div className="requests">
        <h1 className="yours">Your Requests</h1>
        <div className="confirmed">
          <div className="req-divider">
            <p className="divider">Confirmed</p>
            <div className="div-line"></div>
          </div>
          <ConfirmedTradeList />

        </div>
        <div className="pending">
          <div className="req-divider">
            <p className="divider">Pending</p>
            <div className="div-line"></div>
          </div>
          <PendingTradeList/>
        </div>

    </div>
  )
}

export default Requests