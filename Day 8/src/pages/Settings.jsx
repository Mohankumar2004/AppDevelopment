import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

function Settings() {
    const dispatch= useDispatch();
    const navigate=useNavigate();
    const logoutHandler = () =>{
        dispatch(logout())
        navigate('/')
    }
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
            <div className='welcome-container'>
            <h1> Settings </h1>
            <button className='settingslogout' onClick={logoutHandler}>
            LogOut
            </button>
                </div>
            </div>

        </>
    )
}

export default Settings