import React from 'react'
import Layout from '../components/Layout'

import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

function Users() {
    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username:'Guest';

    
    return (
        <>
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> username : <h1 className='username-color'>{username}</h1> </h1>
                    
                </div>

            </div>
        </>
    )
}

export default Users