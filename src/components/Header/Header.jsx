import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
    return (
        <div className='header-container'>
            <div className='header-search'>
                <FacebookIcon />
                <div className="search-input">
                    <SearchIcon />
                    <input type='text' placeholder='Search facebook' />
                </div>
            </div>
            <div className='header-icon'>
                <ul>
                    <li><HomeIcon/></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='header-alert'></div>
        </div>
    )
}
