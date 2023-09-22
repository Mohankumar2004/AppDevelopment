import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Topbar() {
    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username:'Guest';

    return (
        <>
            <div className='topbar'>
            <div className='user username-iconv'><AccountCircleRoundedIcon/></div>
            <h1 className='user username-colorv'>Virtual Job</h1>
            <h1 className='user username-color'>{username}</h1>
             
            </div>
        </>
    )
}

export default Topbar