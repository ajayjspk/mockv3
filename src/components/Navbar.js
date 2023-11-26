import React from 'react';
import './Navbar.css';
// import Login from './Login'
// import Regist from './Register'
// import Otp from './Otp'
import logo from '../images/Group 33524.svg';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function Navbar() {
    return (
        <nav className='navbar'>

            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='menu'>
                {/* <div className='item'><a href='#' style={{textDecoration:'none'}}>For Students</a></div> */}
                {/* <div className='vertical-line'></div> */}
                {/* <div className='item'><a href='#' style={{textDecoration:'none' ,border:'0px'}}>For Institutions</a></div> */}
                <div className='item dropdown'>
                    Resources <KeyboardArrowDownRoundedIcon />
                </div>
                <div className='item'><a href='#' style={{textDecoration:'none',color: '#5c67c7'}}>Request Access</a></div>
                <div class="navbar-toggle">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>

            </div>

        </nav>
    );
}
