import React, { useState } from "react";
import "./RegistrationForm.css";
import {Link,useNavigate} from 'react-router-dom';


function RegistrationForm() {
   const navigate = useNavigate();
   const [formData,setFormData] = useState({
     name:"",
     userName:"",
     email:"",
     mobile:"",
     checked:false,
   });
   const [error,setError] = useState({
     name:null,
     userName:null,
     email:null,
     mobile:null,
     checked:null,
   });

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const signUpHandler = ()=>{
    let isError = false;
    if(formData.name.trim() === ""){
      setError((prev)=>({...prev,name:"Name field is required!"}));
      isError = true;
    }else{
      setError((prev)=>({...prev,name:null}));
    }
    if(formData.userName.trim() === ""){
      setError((prev)=>({...prev,userName:"UserName field is required!"}));
      isError = true;
    }else{
      setError((prev)=>({...prev,userName:null}));
    }
    if(formData.email.trim() === ""){
      setError((prev)=>({...prev,email:"Email field is required!"}));
      isError = true;
    }else{
      setError((prev)=>({...prev,email:null}));
    }
    if(formData.mobile.trim() === ""){
      setError((prev)=>({...prev,mobile:"Mobile field is required!"}));
      isError = true;
    }else{
      setError((prev)=>({...prev,mobile:null}));
    } 
    if( formData.checked === false){
      setError((prev)=>({...prev,checked:"Check this box if you want to proceed"}));
      isError = true;
    }else{
      setError((prev)=>({...prev,checked:null}));
    }
    if(!isError){
      localStorage.setItem("userInfo",JSON.stringify(formData));
      navigate('/Movie');
     }
  }

  return (
    <div className="form">
      <div className="container">
        <div className="headerr">
          <h1 className="appName">Super app</h1>
          <p>Create your new account</p>
        </div>
        <div className="main">
          <input 
            className="inputField" 
            type="text" 
            placeholder="Name"
            value={formData.name} onChange={handleChange} name="name"
          />
          {error.name?<p className="error name">{error.name}</p>:<></>}
          <input
            className="inputField"
            type="text"
            placeholder="UserName"
            value={formData.userName} onChange={handleChange} name='userName'
          />
          {error.userName?<p className="error userName">{error.userName}</p>:<></>}
          <input
            className="inputField"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange} name='email'
          />
          {error.email?<p className="error email">{error.email}</p>:<></>}
          <input
            className="inputField"
            type="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}  name='mobile'
          />
          {error.mobile?<p className="error mobile">{error.mobile}</p>:<></>}
        </div>

        <div className="footerr">
          <div className="check">
            <input className="checkbox" type="checkbox" onChange={handleChange} name="checked"></input>
            <label className="label" htmlFor="checkbox">
              Share my registration data with superapp
            </label>
          </div>
          {error.checked?<p className="error checked">{error.checked}</p>:<></>}
          <button className="signUpBtn" onClick={signUpHandler}>SIGN UP</button>
          <p>
            By clicking on Sign up.you agree to superapp{" "}
            <span className="fontgreen">Terms and conditions of use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className="fontgreen">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
