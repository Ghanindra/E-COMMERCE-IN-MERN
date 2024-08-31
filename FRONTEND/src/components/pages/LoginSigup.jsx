import React,{useState} from 'react'
import './css/loginsignup.css';
const LoginSigup = () => {

  const[state,setState]=useState("Login");
  const [formData,setformData]=useState({
    username:'',
    password:'',
    email:'',
  })

  const login =async()=>{
    console.log("Login function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
     
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
else{
  alert('responseData.errors');
}
  }
  const signup =async()=>{
    console.log("signup function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
     
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
else{
  alert('responseData.errors');
}
  }
  const changeHandler=(e)=>{
setformData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div>
        <div className="loginsignup">
          <div className="container">
            <h1 className="signup">{state}</h1>
            <div className="loginsignup-fields">
            {state==="Sign Up" ?<input type="text" name='username' value={formData.username}  placeholder='Type your name'onChange={changeHandler}/>:<></>}
              <input name='email' value={formData.email} type="Email"   placeholder='Type your Email' onChange={changeHandler}/>
              <input type="text" name="password" value={formData.password} placeholder='Type your password'  onChange={changeHandler}/>
            </div>
            <button  onClick={()=>{state==="Login"?login():signup()}}className='continue'>Continue</button>
           {state ==="Sign Up"
           ? <p className="loginsignup-login">Already have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>
          : <p className="loginsignup-login">Create an Account?       <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
           
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