import React from 'react'
import './createtrades.css'


const CreateTrades = () => {
  return (
    <div className="createtrades">
      <div className="margin-create">
        <div className="header">
          <h1 className='createtrades-header'>Create a Trade</h1>
          <div className="create-form-container">
            <form className='create-trade-form'>

              <label className='search-user'>
                <input className='search-user-input' type="text" name="search-username" placeholder='Who would you like to trade with?'/>
              </label>

              <label className="this-for-that">
                <label>
                  <select className='create-dropdown' type="text" name="username" placeholder='Who would you like to trade with?'/>
                </label>
                for
                <label>
                  <select className='create-dropdown' type="text" name="username" />
                </label>
              </label>

              <label className='search-time'>
                <p className='date-label'>When will your trade happen?</p>
                <input className='search-user-input' type="date" name="search-time"/>
              </label>
              
              <label className='search-loc'>
                <input className='search-user-input' type="text" name="search-loc" placeholder='Where will the trade happen?'/>
              </label>

            </form>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default CreateTrades