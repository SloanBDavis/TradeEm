import React from 'react'
import LongTrade from '../LongTrade/LongTrade'
import './longtradelist.css'

const LongTradeList = ({trades}) => {

//   const values = trades._____
// const listItems = values.map((value) => {
//     <LongTrade props={value}/>
// })  

  return (
    <div className="longtradelist">
        <LongTrade/>
        {/* {listItems} */}
    </div>
  )
}

export default LongTradeList