import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import HouseIcon from '@mui/icons-material/House';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
function Leftbar() {

const dispatch= useDispatch();
const navigate=useNavigate();
const Home2Handler = ()=>{
    navigate('/Home2')
}

const dashboardHandler = ()=>{
    navigate('/Dashboard')
}
const settingsHandler = ()=>{
    navigate('/Settings')
}
const usersHandler = () =>{
    navigate('/Users')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                <HouseIcon/>
                </button>
                <button className='left-bar-button nav-btn' onClick={Home2Handler}>
                <WorkRoundedIcon/>
                </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                        <AccountCircleRoundedIcon/>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                        <SettingsBrightnessRoundedIcon/>
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        <LogoutRoundedIcon/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Leftbar