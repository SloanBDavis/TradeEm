import React from 'react'
import swal from 'sweetalert';
import "./addtrades.css"

const ec2IP = '44.210.113.255';

const addtrades = () => {

  const handleSubmit = (event) => {
    console.log("Item Name: " + event.target[0].value)
    console.log("Description: " + event.target[1].value)

    if ((event.target[0].value || event.target[1].value) === "") {
      event.preventDefault(); swal({
        title: "Sorry...",
        text: "Please enter a valid input for all fields",
        icon: "error",
        button: "Try Again",
      });
    }
    else {
      fetch(ec2IP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'srikar',
          item: event.target[0].value,
          location: 'TAMU MSC Fountain',
          wants: event.target[1].value
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <div className="addtrades">
      <div className="margin-create">
        <div className="header">
          <h1 className='addtrades-header'>Add Tradeable Item</h1>
          <div className="add-item">
            <form className='add-item-form' onSubmit={handleSubmit}>
              <label>
                <input className='add-name' type="text" name="itemname" placeholder='Name of the item' />
              </label>
              <label>
                <input className='add-desc ' type="text" name="itemdesc" placeholder='Quick Description' />
              </label>
              <input type="submit" value="Add" className='submit-add-trade' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default addtrades