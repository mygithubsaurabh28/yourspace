import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';


function Register() {
    const [valid,setValid]=useState({
        name:"",
        email:"",
        password:""

        
    });
     const navigate=useNavigate();
    const [data,setData]=useState([]);

    function mydata(e){
      const {value,name}=e.target;
      setValid(()=>{
        return {
          ...valid,
          [name]:value
        }
      })
    }

    function registerme(e){
        e.preventDefault();
        const {name,email,password}=valid;
        if(name===""){
          alert("name field is required")
        }
        else if(email===""){
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
            alert("data added successfully");
            localStorage.setItem("username",JSON.stringify([...data,valid]))
          }
          navigate('/')
          
        }
    
  return (
    <>
    <div className='signup'>
        <h3>Sign Up</h3>
    </div>
      <div className='registerform'>
          <input id='inp1' type='text' name="name" placeholder='Enter Name' onChange={mydata}/><br/><br/>
          <input id='inp2' type='text' name="email" placeholder='Email address' onChange={mydata}/><br/><br/>
          <input id='inp3' type='password'  name="password" placeholder='Password' onChange={mydata}/><br/><br/>
          <button type='button' onClick={registerme}>Register</button>
      </div>
    </>
  )
  }

export default Register
