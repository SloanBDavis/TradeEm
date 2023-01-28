import React from 'react'
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import './signup.css'

const Signup = () => {

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username: " + event.target[0].value)
    console.log("Email: " + event.target[1].value)
    console.log("Password: " + event.target[2].value)
    console.log("Confirm Password: " + event.target[3].value)

    if(event.target[0].value === "" || event.target[1].value === "" || event.target[2].value === "" || event.target[3].value === "") { swal({
      title: "Sorry...",
      text: "Please enter a valid input for all fields",
      icon: "error",
      button: "Try Again",
    }); }

    else if(event.target[2].value !== event.target[3].value) { swal({
      title: "Sorry...",
      text: "The passwords didn't match",
      icon: "error",
      button: "Try Again",
    }); }
    // 👇️ redirect to /contacts
    else { navigate(`/trading/${event.target[0].value}`) };
  };

  return (
    <div className="sign-up">
        <h1 className="sign-header">Tradem.</h1>
        <div className="sign-body">
              <div className="signup-data">
                  <h1 className="signup-form-header">Welcome, glad you're joining us!</h1>
                  <form className='signup-form' onSubmit={handleSubmit}>
                      <label className='ass'>
                          <p>Username :</p>
                          <input className='signup-text-input' type="text" name="username" />
                      </label>
                      <label className='ass'>
                          <p>Email:</p>
                          <input className='signup-text-input' type="text" name="email" />
                      </label>
                      <label className='ass'>
                          <p>Password:</p>
                          <input className='signup-text-input' type="text" name="Password" />
                      </label>
                      <label className='ass'>
                          <p>Confirm Password:</p>
                          <input className='signup-text-input' type="text" name="CPassword" />
                      </label>
                      <input type="submit" value="Submit" className='submit'/>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Signup