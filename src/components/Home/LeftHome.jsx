import React, { useEffect, useState } from 'react'

import image from "../../assets/img/panda-avatar.jpg"
import friends from "../../assets/icon/friend.png"
import groups from "../../assets/icon/groups.png"
import saved from "../../assets/icon/saved.png"
import feeds from "../../assets/icon/feed.png"
import marketplace from "../../assets/icon/market.png"
import ads_manager from "../../assets/icon/analytics.png"
import climate from "../../assets/icon/climate.png"
import events from "../../assets/icon/events.webp"
import fundraisers from "../../assets/icon/facebook-reactions.png"
import gaming from "../../assets/icon/gaming.png"
import memories from "../../assets/icon/memories.png"
import messenger from "../../assets/icon/messenger.png"
import messenger_kids from "../../assets/icon/messenger-kids.png"
import card from "../../assets/icon/credit-card.png"
import pages from "../../assets/icon/pages.png"
import video_game from "../../assets/icon/video-game.png"
import recent from "../../assets/icon/recent.png"
import video from "../../assets/icon/video.png"


import gintama from "../../assets/img/gintama.webp"
import naruto from "../../assets/img/naruto.webp"
import fairy from "../../assets/img/fairy-tail.avif"
import mashle from "../../assets/img/mashle.jpg"
import street from "../../assets/img/street.jpg"
import scoups from "../../assets/img/scoups.webp"
import haejin from "../../assets/img/parkhaejin.jpg"
import jisoo from "../../assets/img/jisoo.webp"


import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
        {
            id: 5,
            img: street,
            name: "Update Street News",
        },{
            id: 6,
            img: scoups,
            name: "Go go Scoups",
        },{
            id: 7,
            img: haejin,
            name: "Fandom Park Hae Jin",
        },{
            id: 8,
            img: jisoo,
            name: "Chichu",
        },
    ]

    const initNumberList = 5;

    const [benefitList, setBenefitList] = useState([])
    const [numberList, setNumberList] = useState(initNumberList)

    const [shortcutList, setShortcutList] = useState([])
    const [numberPages, setNumberPages] = useState(initNumberList)

    useEffect(() => {
        setBenefitList(listBenefit.slice(0, numberList))
        setShortcutList(listShortcut.slice(0, numberPages))
    }, [numberList, numberPages])

    const handleShow = () => {
        setNumberList(listBenefit.length)
    }
    const handleHide = () => {
        setNumberList(initNumberList)
    }

    return (
        <div className="lefthome-container">
            <div className="home-left-A">
                <ul>
                    {/*listBenefit*/benefitList.map((item) => (
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
                <button className='btn-see-more'
                        onClick={() => {
                            {
                                numberList === initNumberList && handleShow()
                            }
                            {
                                numberList === listBenefit.length && handleHide()
                            }
                        }}>
                    <span className='text'>
                        {numberList === initNumberList ? "See more" : "See less"}
                    </span>
                    <span className='icon'>
                        {numberList === initNumberList ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon />}
                    </span>
                </button>
            </div>

            <div style={{ backgroundColor: "darkgray", height: "1px", width: "95%", margin: "10px 0", color: "rgb(240, 238, 238)" }}>haha</div>
            
            <div className="home-left-B">
                <div className="title">
                    <span className='text'>Your shortcuts</span>
                    <span className='icon'><MoreHorizIcon/></span>
                </div>
                <ul>
                    {/*listShortcut*/shortcutList.map((item) => (
                        <li key={item.id}>
                            <div className='home-avatar'>
                                <div className='home-avatar-img'>
                                    {/* <img src={item.img} /> */}
                                    <Avatar alt="" src={item.img} variant="rounded"/>
                                </div>
                                <div className="home-avatar-name">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className='btn-see-more'
                    onClick={() => {
                        {
                            numberPages === initNumberList && setNumberPages(listShortcut.length)
                        }
                        {
                            numberPages === listShortcut.length && setNumberPages(initNumberList)
                        }
                    }}>
                    <span className='text'>
                        {numberPages === initNumberList ? "See more" : "See less"}
                    </span>
                    <span className='icon'>
                        {numberPages === initNumberList ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon />}
                    </span>
                </button>
            </div>
        </div>
    )
}
