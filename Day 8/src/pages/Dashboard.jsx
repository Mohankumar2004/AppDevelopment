import React from 'react'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import { selectUser } from '../redux/userSlice'
import Footer from '../components/Footer'
import Searchbox from '../components/Searchbox'
function Dashboard() {

    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username:'Guest';
    const dispatch= useDispatch();
    return (
        <>
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{username} </span> ! </h1>

                </div>
                
                </div>
                
                <div className='dash1'>
                No.of.Jobs
                <br/>
                <br/>1200
                </div>
                <div className='dash2'>
                User eligible job
                <br/>200
                </div>
                <div className='dash3'>
                Total users
                <br/>1200

                </div>
                <div className='dash3'>
                User Streaks
                <br/>100

                </div>
                <div className='dash3'>
                Resume Weitage
                <br/>1200

                </div>
                <Footer/>

        </>
    )
}

export default Dashboard