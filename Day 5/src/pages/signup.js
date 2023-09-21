import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './signup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const nav=useNavigate()
  const routeLogin =()=>{
    nav('/login');

    
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Contact Number:', contactNo);
    console.log('Address:', address);
    console.log('Gender:', gender);
  };

  return (
    
      <form onSubmit={handleSubmit} className="signup-form">
      <h2 style={{marginLeft:"110px"}}>Signup</h2>
        <div className="form-group">
          <label htmlFor="fullName"></label>
          <input
            type="text"
            id="fullName"
            placeholder='Enter Your Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="email"
            id="email"
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        
          <input
            type="password"
            id="password"
            placeholder='Choose Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="contactNo"
            placeholder='Enter Contact Number'
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        
          <input
            type="text"
            id="address"
            placeholder='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" onClick={routeLogin}>Sign Up</button>
       
      </form>
    
  );
}

export default Signup;
