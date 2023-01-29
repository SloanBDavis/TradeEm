import React , {useState} from 'react'
import './ShortTrade.css'

const ShortTrade = ({props}) => {

  const [visi, setVisi] = useState(true)

  const handleClick = () => {
    setVisi(!visi)
  }


  return (
    visi && (<div className="shorttrade" onClick={handleClick}>
        <h1 className="shorttrade-name">simah</h1>
        <h1 className="shorttrade-trade"><span className='give'>Logitech Mouse</span> ↔ <span className='recieve'>Cargo Pants</span></h1>
        <p className="shorttrade-time">1/29/2023 3:00 PM</p>
        <p className="shorttrade-loc">MSC Bethancourt Ballroom</p>
    </div>)
  )
}

export default ShortTrade