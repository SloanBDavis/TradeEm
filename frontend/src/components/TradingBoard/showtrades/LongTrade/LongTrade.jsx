import React , {useState} from 'react'
import './longtrade.css'

const LongTrade = ({props}) => {

  const [visi, setVisi] = useState(true)

  const handleClick = () => {
    setVisi(!visi)
  }

  return (
    visi && (<div className="longtrade" onClick={handleClick}>
      <div className="horizontal-divider">
        <div className="maindata">
            <h1 className="longtrade-name">{props.username}</h1>
            <h1 className="longtrade-trade"><span className='give'>{props.give}</span> ↔ <span className='recieve'>{props.recieve}</span></h1>
        </div>
        <div className="subdata">
            <p className="longtrade-time">Time: {props.time}</p>
            <p className="longtrade-loc">Location: {props.loc}</p>
        </div>
      </div>  
    </div>)
  )
}

export default LongTrade