import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

function Login() {
  const  [username, setUsername] =  useState('');
        const  [password, setPassword] =  useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {    
    e.preventDefault();
    if(username&&password){
    dispatch(login(username));
    navigate("/home2");
    }
      
 
  }
  return (
    <>
      <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={submitHandler}>
            <h1 className='auth-heading'>Login Form</h1>
            <input type="text"  value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' className='auth-field' required />
            <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className='auth-field' required />

            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
          </form>
            <Link to='/Register' className='auth-links'>Register</Link>
        </div>
      </div>
    </>
  )
}

export default Login