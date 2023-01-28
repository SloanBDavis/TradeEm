import React, {useState} from 'react'
import './createtrades.css'


const CreateTrades = () => {

  const [name, setName] = useState("")

  const getSearch = (event) => {
    console.log(event)
    setName(event.target[0].value)
    event.preventDefault()
  }

  const handleSubmit = (event) => {
    console.log(event)
    setName("");
    event.preventDefault();
  }

  return (
    <div className="createtrades">
      <div className="margin-create">
        <div className="header">
          <h1 className='createtrades-header'>Create a Trade</h1>
          <div className="create-form-container">
            <div className='create-trade-form'>

              {name ? "" : 
              <form className='search-user' onSubmit={getSearch}>
                <input className='search-user-input' type="text" name="search-username" placeholder='Who would you like to trade with?'/>
              </form>}

              {
                name ?
                <form className= 'second-page' id='route-here' onSubmit={handleSubmit}>
                  <label className="this-for-that">
                  <label>
                    <select form='route-here' className='create-dropdown' type="text" name="username" placeholder='Who would you like to trade with?'>
                      <option value="" disabled selected>Select your option</option>
                    </select>
                  </label>
                  for
                  <label>
                    <select form='route-here' className='create-dropdown' type="text" name="username">
                      <option value="" disabled selected>Select your option</option> 
                    </select>
                  </label>
                </label>

                <label className='search-time'>
                  <p className='date-label'>When will your trade happen?</p>
                  <input className='search-user-input datetime' type="date" name="search-time"/>
                </label>
                
                <label className='search-loc'>
                  <input className='search-user-input' type="text" name="search-loc" placeholder='Where will the trade happen?'/>
                </label>

                <label className='search-loc'>
                  <input className='create-submit' type="submit" value='Trade' name="create-submit"/>
                </label>
              </form> : ""
              }

            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default CreateTrades