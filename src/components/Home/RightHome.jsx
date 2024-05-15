import React from 'react'

import sunsilk from "../../assets/img/sunsilk.png"
import sunsilk_ads from "../../assets/img/sunsilk-ads.jpg"
import giftbox from "../../assets/icon/giftbox.png"

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import contactsList from "../../data/Contacts.json"
import groupchatList from "../../data/GroupChat.json"

const RightHome = () => {
    return <div className='righthome-container'>
        <div className="sponsored">
            <div className="title">Sponsored</div>
            <div className="sponsored-ads">
                <div className='sponsored-label'>
                    <img src={sunsilk} />
                </div>
                <div className="sponsored-content">
                    <p className='sponsored-content-title'>Sunsilk</p>
                    <p style={{ width: "90%", color: "rgb(99, 98, 98)" }}>Sunsilk Sri Lanka provides you the best products and treatment
                        for your hair as well as expert advice with instant easy steps to feel great.</p>
                    <img src={sunsilk_ads} />
                </div>
            </div>
        </div>

        <div style={{ backgroundColor: "darkgray", height: "1px", width: "95%", margin: "10px 0", color: "rgb(240, 238, 238)" }}>haha</div>

        <div className="birthday">
            <div className="title">Birthdays</div>
            <div className="birthday-content">
                <div className="birthday-img">
                    <img src={giftbox} />
                </div>
                <div className='birthday-today'>
                    <p style={{ width: "90%", color: "rgb(99, 98, 98)" }}>
                        <strong style={{ color: "black" }}>Daisy, Erica</strong> and
                        <strong style={{ color: "black" }}> 2 others</strong> have birthdays today
                    </p>
                </div>
            </div>
        </div>

        <div style={{ backgroundColor: "darkgray", height: "1px", width: "95%", margin: "10px 0", color: "rgb(240, 238, 238)" }}>haha</div>

        <div className="contacts">
            <div className="title">
                <span className='text'>Contacts</span>
                <span className='icon2'><SearchIcon /></span>
                <span className='icon'><MoreHorizIcon /></span>
            </div>
            <div className="contacts-list">
                <ul>
                    {contactsList.map((item) => (
                        <li key={item.id}>
                            <div className="contacts-ava">
                                <img src={item.img} />
                            </div>
                            <div className="contacts-name">
                                {item.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ backgroundColor: "darkgray", height: "1px", width: "95%", margin: "10px 0", color: "rgb(240, 238, 238)" }}>haha</div>

            <div className="group-chats">
                <div className="title">Group chat</div>
                <div className="groupchats-list">
                    <ul>
                        {groupchatList.map((item) => (
                            <li key={item.id}>
                                <div className="contacts-ava">
                                    <img src={item.img} />
                                </div>
                                <div className="contacts-name">
                                    {item.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className='btn-new-group'>
                    <div className='btn-new-group-icon' >
                        <span className='icon'><AddIcon /></span>
                    </div>
                    <span className='name'>Create a new group</span>
                </button>
            </div>
        </div>
    </div>;
};

export default RightHome;