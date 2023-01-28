import React from 'react'
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {

    let navigate = useNavigate(); 

    const gotoSignin = () =>{ 
      let signpath = `signup`; 
      navigate(signpath);
    }

    // CHANGE THIS ONCE THE BACKEND IS WORKING

    const handleSubmit = (event) => { 
        event.preventDefault();
        console.log("Username: " + event.target[0].value)
        console.log("Password: " + event.target[1].value)

        if((event.target[0].value || event.target[1].value) === "") { swal({
            title: "Sorry...",
            text: "Please enter a valid input for all fields",
            icon: "error",
            button: "Try Again",
          }); }

        else {navigate(`/trading/${event.target[0].value}`)};
    }

    // ----------------------------------------  


    return (
        <div className="log-in">
            <h1 className='log-header'>Tradem.</h1>
            <div className="log-body">
                <div className="login-data">
                    <h1 className="login-form-header">Login</h1>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <label>
                            <p>Username:</p>
                            <input className='signup-text-input' type="text" name="username" />
                        </label>
                        <label>
                            <p>Password:</p>
                            <input className='signup-text-input 'type="password" name="Password" />
                        </label>
                        <input type="submit" value="Submit" className='submit'/>
                    </form>
                </div>
                <div className="signup">
                    <p>New User?</p>
                    <div className='signbutton' onClick={gotoSignin}>Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default Login