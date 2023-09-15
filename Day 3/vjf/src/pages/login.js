import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

import './login.css';
function Login() {
   
        const  [Username, setUsername] =  useState('');
        const  [Password, setPassword] =  useState('');
        const  [submitUsername, setsubmitUsername] =  useState('');
        const  [submitPassword, setsubmitPassword] =  useState('');
    
       const handleSubmit = (e) =>
       {
        e.preventDefault();
        setsubmitUsername(Username);
        setsubmitPassword(Password);
       }
        const nav= useNavigate()
       const routeregister=()=>{
        nav('/Signup')
       }
  return (
    <div className='center'>
      <form onSubmit={handleSubmit}>
      <h2 style={{marginLeft:"150px"}}>Login</h2>
        <div className='email'>
        <label>
        <input type="email" value={Username} placeholder='Enter Your Email ID' onChange={(e) => setUsername(e.target.value)} name='Username' required    style={{marginLeft:"50px",maxWidth:"250px"}} />
        </label>
        </div>
        <div className='password'>
        <label>
        <input type="Password" value={Password}  placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} name='Password' reqired  style={{marginLeft:"50px",maxWidth:"250px"}} />
        </label>
        </div>
        <div className='submitbutton'>
        <button type='submit' style={{marginLeft:"130px" ,maxWidth:"80px"}}>Submit </button>
        <p style={{maxWidth:"none",marginLeft:"70px"}}>If not have an account ,<button style={{maxWidth:"80px",backgroundColor:"transparent",border:"none"}} onClick={routeregister} > Register</button></p>
       
        </div>
      </form>
      
    </div>
  )
}

export default Login
