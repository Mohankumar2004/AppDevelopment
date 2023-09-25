import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { logout } from '../redux/userSlice';
import { Link } from 'react-router-dom';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Topbar() {
    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username:'Guest';
    const dispatch= useDispatch();
const navigate=useNavigate();
const Home2Handler = ()=>{
    navigate('/About')
}
const Home2Handle = ()=>{
    navigate('/Home2')
}
const usersHandler = () =>{
    navigate('/Users')
}
    
    return (
        <>
            <div className='topbar'>
            
            
            <h1 className='user username-colorv'>Virtual Job
            </h1>
            
            <h1 className='user username-color'>
            
    
    <ul>
    <li>
    <Link to="/Dashboard">Home </Link>
        </li>
        <li>
          <Link to="/Home2">Jobs   </Link>
        </li>
        <li>
          <Link to="/company">Company   </Link>
        </li>
        <li>
          <Link to="/about">About Us   </Link>
        </li>
      </ul>
        <div className='username1'>
        
        <AccountCircleRoundedIcon/>
        
        {username}
        </div>
        </h1>
      
            
            
            </div>
        </>
    )
}

export default Topbar