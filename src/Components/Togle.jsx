import React, { useState } from 'react';
import './Togle.css';
import { useNavigate } from 'react-router-dom';

function Togle() {
  const[show,setShow]=useState(true);
  const [reg,setReg]=useState(true);

  const newdata=show?'login':'newlogin';
  const data1=reg?'login':'newlogin';

  const navigate=useNavigate();

  function login1(){
    if(show){
      setShow(false)
    }
    else{
      setShow(true);
    }
  }

  function register(){
    
    if(reg){
      
      setReg(false)
    }
    else{
      setReg(true)
    }
    navigate("/register");
  }

  const [valid,setValid]=useState({
    name:"",
    email:"",
    password:""

    
});

const [data,setData]=useState([]);

function myinput(e){
  const {value,name}=e.target;
  setValid(()=>{
    return {
      ...valid,
      [name]:value
    }
  })
}

function mypage(e){
    e.preventDefault();

    const getUser=localStorage.getItem("username")

    const {email,password}=valid;
    if(email===""){
        alert("email field is required")
      }
      else if(!email.includes("@"))
      {
        alert("plz enter valid email")
      }
      else if(password===""){
        alert("plz enter the password")
      }
      else if(password.length<5){
        alert("password must be greater than ")
      }
      else{
        if(getUser&&getUser.length){
          const gedata=JSON.parse(getUser);
          const logindata=gedata.filter((el,k)=>{
            return el.email===email && el.password===password
          })
          alert("sign in successfully");
        }
        navigate('/board')
      }
    }
  
  return (
    <>
      <div className='box'>
        <div className={newdata} onClick={login1}>LOGIN</div>
      
        <div className={data1} onClick={register}>Register</div>
        
      </div>

      <div className='mainbox'>
        <p>Sign in with</p>
  
        <div className='loginform'>
          <input id='inp1' type='text' name="email" onChange={myinput} placeholder='Email address'/><br/><br/>
          <input id='inp2' type='password'  name="password" onChange={myinput} placeholder='Password'/><br/><br/>
          <button type='button' onClick={mypage}>SIGN IN</button>
        </div>
      </div>
    </>
  )
}

export default Togle;
