import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import ExtensionIcon from '@mui/icons-material/Extension';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AddAlertRoundedIcon from '@mui/icons-material/AddAlertRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Button, FormControl, IconButton, InputAdornment, InputBase } from '@mui/material';

import image from "../../assets/img/panda-avatar.jpg"
import image2 from "../../assets/img/panda-2.jpg"


export default function Header() {
    const listIcon = [
        {
            id: 1,
            item: HomeIcon,
        },
        {
            id: 2,
            item: OndemandVideoIcon,
        },
        {
            id: 3,
            item: StorefrontIcon,
        },
        {
            id: 4,
            item: GroupIcon,
        },
        {
            id: 5,
            item: ExtensionIcon,
        },
    ]

    return (
        <div className='header-container'>

            <div className='header-search'>
                <FacebookRoundedIcon className='fb-icon' />
                <FormControl fullWidth sx={{ m: 1 }} variant="standard" className='search-input'>
                    <InputBase
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        placeholder='Search facebook' />
                </FormControl>
            </div>

            <div className='header-icon'>
                <ul>
                    {/* <li>
                        <Button className='header-icon-btn'>
                            <HomeIcon className='header-icon-item' />
                        </Button>
                    </li>
                    <li>
                        <Button className='header-icon-btn'>
                            <OndemandVideoIcon className='header-icon-item' />
                        </Button>
                    </li>
                    <li>
                        <Button className='header-icon-btn'>
                            <StorefrontIcon className='header-icon-item' />
                        </Button>
                    </li>
                    <li>
                        <Button className='header-icon-btn'>
                            <GroupIcon className='header-icon-item' />
                        </Button>
                    </li>
                    <li>
                        <Button className='header-icon-btn'>
                            <ExtensionIcon className='header-icon-item' />
                        </Button>
                    </li> */}

                    {listIcon.map((icon) => (
                        <li key={icon.id}>
                            <Button className='header-icon-btn'>
                                <icon.item className='header-icon-item' />
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='header-alert'>
                <div className='header-avatar'>
                    <div className="avatar">
                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Nck5xJk_J0XASSjRuPFzI5dvpDcrcp8Rdg4arwXeCw&s' /> */}
                        <img src={image} />
                        {/* <Avatar alt="" src={image}/> */}
                    </div>
                    <div className="name">
                        <p>Elys Gabriela</p>
                    </div>
                </div>
                <div className='header-notice'>
                    <IconButton className='header-alert-btn'>
                        <AddRoundedIcon className='alert-btn' />
                    </IconButton>
                    <IconButton className='header-alert-btn'>
                        <MessageRoundedIcon className='alert-btn' />
                        <span className="number-alert">1</span>
                    </IconButton>
                    <IconButton className='header-alert-btn'>
                        <AddAlertRoundedIcon className='alert-btn' />
                        <span className="number-alert">3</span>
                    </IconButton>
                    <IconButton className='header-alert-btn'>
                        <ArrowDropDownRoundedIcon className='alert-btn' />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
