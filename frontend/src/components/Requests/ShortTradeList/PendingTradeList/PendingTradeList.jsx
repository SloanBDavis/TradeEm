import React, {useState} from 'react'
import ShortTrade from '../../ShortTrade/ShortTrade'
import './pendingtradelist.css'

const PendingTradeList = ({trades}) => {

  const [visi, setVisi] = useState(false)

  return (
    <div className="pending-tradelist" onClick={() => setVisi(!visi)}>
        {visi && <ShortTrade/>}  
    </div>
  )
}

export default PendingTradeList