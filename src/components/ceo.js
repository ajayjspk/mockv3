import React from 'react'
import ceo from '../images/ceo.svg'
import { Avatar } from '@mui/material';
import './ceo.css';

export default function Ceo() {
    return (
        <div className='container1'>
            <Avatar
                alt="Remy Sharp"
                src={ceo}
                sx={{ width: 56, height: 56 }}
            />
            <p className='about1'>
                Invest in your Talent. Gain the Skills Your Org Needs to Meet Business Goals and Innovate. Future-proof Your Corporate Workforce with Skill Development. Demo Udemy Business.
            </p>
            <h3 text-align='center'>CEO, RUSA</h3>
        </div>
    )
}
