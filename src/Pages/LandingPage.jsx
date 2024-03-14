import React from 'react'
import '../Styles/LandingPage.css'
import SigninForm from '../Components/SigninForm/SigninForm'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <div className="logoTitle">
            <h3>V-Connect</h3>
            <p>Working together, Growing together!</p>
        </div>
        <div className='formTitles'>
            <h3>Welcome To Biocon's</h3>
            <h2>Vendor Portal</h2>
        </div>
        <div className="loginhere">
            <SigninForm />
        </div>
        
        <button className='ssobtn'>SSO Login</button>
       
    </div>
  )
}

export default LandingPage