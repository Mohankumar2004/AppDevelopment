import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome1 <span className=' username-color'>{user.username} </span> ! </h1>

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
                

        </>
    )
}

export default Dashboard