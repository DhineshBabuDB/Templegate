import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import '../../Styles/LandingPage.css'
import { Link } from 'react-router-dom';

const SigninForm = () => {
  return (
    <div className='SigninForm'>
        <form action="">
            <p>Sign in to start your session</p>
            <div className="logbtns">
                <button>Company Login</button>
                <button> Vendor Login</button>
            </div>
            <div className='inputFields'>
                <div className="userName">
                    <FaUser/>
                    <input type="text" />
                </div>
                <div className="Password">
                    <MdLock />
                    <input type="password"/>
                </div>
            </div>
            <div className="loginbutton">
                <Link to={'/home'} className='buttonLink'><button>SIGN IN</button></Link>
            </div>
            <div className="forgotPassword">
                <span>Forget Password?</span>
            </div>
        </form>
    </div>
  )
}

export default SigninForm