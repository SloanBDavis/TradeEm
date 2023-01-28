import React from 'react'
import {useNavigate} from 'react-router-dom';
import './errorpage.css'

const ErrorPage = () => {

    let navigate = useNavigate(); 

    const gotoLogin = () =>{ 
      let signpath = `/`; 
      navigate(signpath);
    }

    return (
        <div className="error-page">
            <h1 className='error-message'>404 Page Not Found :( </h1>
            <div className="redirect-back" onClick={gotoLogin}>Redirect to Home</div>
        </div>
    )
}

export default ErrorPage