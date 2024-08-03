import React from 'react'
import './css/loginsignup.css';
const LoginSigup = () => {
  return (
    <div>
        <div className="loginsignup">
          <div className="container">
            <h1 class="signup">Sign Up</h1>
            <div className="loginsignup-fields">
              <input type="text" placeholder='Type your name'/>
              <input type="Email" placeholder='Type your Email'/>
              <input type="text" placeholder='Type your password'/>
            </div>
            <button class='continue'>Continue</button>
            <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
       <div className="loginsignup-agree">
        <input type="checkbox" name="" id=""/>
        <p> By continuing ,i agree to the terms of use and privacy policy.</p>
       </div>
          </div>
        </div>
    </div>
  )
}

export default LoginSigup