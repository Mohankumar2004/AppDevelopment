import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
function Register() { 
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    navigate('/')
  }


  return (
    <>
      <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
            <h1 className='auth-heading'>Registration Form</h1>
              <input type="text" name="username" id="username" value={formdata.username} placeholder='username' onChange={handleChange} className='auth-field' required />
              <input type="email" name="email" id="email" value={formdata.email} placeholder='email' onChange={handleChange} className='auth-field' required />
              <input type="number" name="phone" id="phone" value={formdata.phone} placeholder='phone' onChange={handleChange} className='auth-field' required />
              <input type="password" name="password" id="password" value={formdata.password} placeholder='password' onChange={handleChange} className='auth-field' required />
              <button type='submit' className='auth-btn app-x-shadow'>
              
              Register </button>
          </form>

          <Link to='/' className='auth-links'>Login</Link>
        </div>
      </div>

    </>
  )
}

export default Register