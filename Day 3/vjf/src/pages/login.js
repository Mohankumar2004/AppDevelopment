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
      <h2>Login</h2>
        <div className='email'>
        <label>
        Email
        <input type="email" value={Username} onChange={(e) => setUsername(e.target.value)} name='Username' required     />
        </label>
        </div>
        <div className='password'>
        <label>
        Password
        <input type="Password" value={Password} onChange={(e) => setPassword(e.target.value)} name='Password' reqired />
        </label>
        </div>
        <div className='submitbutton'>
        <button type='submit' >Submit </button>
        <p>if not have an account
        </p>
        <button type='submit' onClick={routeregister} >Register </button>
        </div>
      </form>
      
    </div>
  )
}

export default Login