import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")
    return (
        <div className='LoginPopup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='your name' required />}

                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="Login-popup-condition">
                    <input type="checkbox" required />
                    <p>Continuing,I Agree To The Term Of Use & Privacy Policy. </p>
                </div>
                {currState === "Login"

                    ? <p>Create a new Account?<span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Loginn Here</span></p>
                }
            </form>

        </div>
    )
}

export default LoginPopup