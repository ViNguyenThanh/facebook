import React from 'react'

import image from "../../assets/img/panda-avatar.jpg"
import friends from "../../assets/img/friend.png"
import groups from "../../assets/img/groups.png"
import saved from "../../assets/img/saved.png"
import feeds from "../../assets/img/feed.png"
import marketplace from "../../assets/img/market.png"
import ads_manager from "../../assets/img/analytics.png"
import climate from "../../assets/img/climate.png"
import events from "../../assets/img/events.webp"
import fundraisers from "../../assets/img/facebook-reactions.png"
import gaming from "../../assets/img/gaming.png"
import memories from "../../assets/img/memories.png"
import messenger from "../../assets/img/messenger.png"
import messenger_kids from "../../assets/img/messenger-kids.png"
import card from "../../assets/img/credit-card.png"
import pages from "../../assets/img/pages.png"
import video_game from "../../assets/img/video-game.png"
import recent from "../../assets/img/recent.png"
import video from "../../assets/img/video.png"


import gintama from "../../assets/img/gintama.webp"
import naruto from "../../assets/img/naruto.webp"
import fairy from "../../assets/img/fairy-tail.avif"
import mashle from "../../assets/img/mashle.jpg"

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Avatar, Button } from '@mui/material'


export default function LeftHome() {

    const listBenefit = [
        {
            id: 1,
            img: image,
            name: "Elys Gabriela",
        },
        {
            id: 2,
            img: friends,
            name: "Friends",
        },
        {
            id: 3,
            img: groups,
            name: "Groups",
        },
        {
            id: 4,
            img: saved,
            name: "Saved",
        },
        {
            id: 5,
            img: feeds,
            name: "Feeds",
        },
        {
            id: 6,
            img: marketplace,
            name: "Marketplace",
        },
        {
            id: 7,
            img: ads_manager,
            name: "Ads Manager",
        },
        {
            id: 8,
            img: climate,
            name: "Climate Science Centre",
        },
        {
            id: 9,
            img: events,
            name: "Events",
        },
        {
            id: 10,
            img: fundraisers,
            name: "Fundraisers",
        },
        {
            id: 11,
            img: gaming,
            name: "Gaming video",
        },
        {
            id: 12,
            img: memories,
            name: "Memories",
        },
        {
            id: 13,
            img: messenger,
            name: "Messenger",
        },
        {
            id: 14,
            img: messenger_kids,
            name: "Messenger Kids"
        },
        {
            id: 15,
            img: card,
            name: "Orders and payments"
        },
        {
            id: 16,
            img: pages,
            name: "Pages"
        },
        {
            id: 17,
            img: video_game,
            name: "Play games"
        },
        {
            id: 18,
            img: recent,
            name: "Recent ad activity"
        },
        {
            id: 19,
            img: video,
            name: "Video"
        }
    ]

    const listShortcut = [
        {
            id: 1,
            img: gintama,
            name: "Funny Gintama",
        },
        {
            id: 2,
            img: naruto,
            name: "Naruto Sexy no Jutsu",
        },
        {
            id: 3,
            img: fairy,
            name: "Fairy Tail",
        },
        {
            id: 4,
            img: mashle,
            name: "Lance Crown Fanclub",
        },
    ]

    return (
        <div className="lefthome-container">
            <div className="home-left-A">
                <ul>
                    {listBenefit.map((item) => (
                        <li key={item.id}>
                            <div className='home-avatar'>
                                <div className={`${(item.id == 1 ?
                                    "home-avatar-profile" : "home-avatar-img"
                                )}`}>
                                    <img src={item.img} />
                                    {/* <Avatar alt="" src={item.img}/> */}
                                </div>
                                <div className="home-avatar-name">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </li>

                        // (item.id == 1 ?
                        //   <li key={item.id}>
                        //     <div className='home-avatar'>
                        //       <div className="home-avatar-profile">
                        //         <img src={item.img} />
                        //         {/* <Avatar alt="" src={item.img} /> */}
                        //       </div>
                        //       <div className="home-avatar-name">
                        //         <p>{item.name}</p>
                        //       </div>
                        //     </div>
                        //   </li> :
                        //   <li key={item.id}>
                        //     <div className='home-avatar'>
                        //       <div className="home-avatar-img">
                        //         {/* <img src={item.img} /> */}
                        //         <Avatar alt="" src={item.img} />
                        //       </div>
                        //       <div className="home-avatar-name">
                        //         <p>{item.name}</p>
                        //       </div>
                        //     </div>
                        //   </li>)
                    ))}
                </ul>
                <button className='btn-see-more'>
                    <span className='text'>See more</span>
                    <span className='icon'><KeyboardArrowDownIcon /></span>
                </button>
            </div>
            <div style={{ backgroundColor: "lightgray", height: "2px", margin: "10px 0" }}></div>
            <div className="home-left-B">
                <div className="title">
                    <span className='text'>Your shortcuts</span>
                    <span className='icon'><MoreHorizIcon/></span>
                </div>
                <ul>
                    {listShortcut.map((item) => (
                        <li key={item.id}>
                            <div className='home-avatar'>
                                <div className='home-avatar-img'>
                                    {/* <img src={item.img} /> */}
                                    <Avatar alt="" src={item.img} />
                                </div>
                                <div className="home-avatar-name">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className='btn-see-more'>
                    <span className='text'>See more</span>
                    <span className='icon'><KeyboardArrowDownIcon /></span>
                </button>
            </div>
        </div>
    )
}
