import { Avatar, FormControl, InputAdornment, InputBase } from '@mui/material';
import React from 'react'

import image from "../../../assets/img/panda-avatar.jpg"
import video from "../../../assets/icon/video-stream.png"
import photo from "../../../assets/icon/photos.png"
import face from "../../../assets/icon/grin.png"

import post_ava from "../../../assets/img/k_crush.jpg"


const NewsContent = () => {
    const listIcon = [
        {
            id: 1,
            img: video,
            name: "Live Video",
        },
        {
            id: 2,
            img: photo,
            name: "Photos/Video",
        },
        {
            id: 3,
            img: face,
            name: "Feeling/Activity",
        },
    ]

    return <div className='newscontent-container'>
        <div className="posting-place">
            <div className="top-posting-place">
                <div className="top-posting-place-img">
                    <img src={image} />
                </div>
                <div className="top-posting-place-write">
                    <FormControl sx={{ m: 1 }} variant="standard" className='search-input'
                        style={{ width: "95%" }}>
                        <InputBase placeholder='What&apos;s on your mind, Elys?' />
                    </FormControl>
                </div>
            </div>

            <div style={{ backgroundColor: "lightgray", height: "1px", width: "95%", margin: "5px 15px" }}></div>

            <div className="bottom-posting-place">
                <ul>
                    {listIcon.map((item) => (
                        <li key={item.id}>
                            <div className="bottom-posting-place-icon">
                                <img src={item.img} />
                            </div>
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="post">
            <div className="top-post">
                <div className="top-post-ava">
                    <img src={post_ava}/>
                </div>
                <div className="top-post-name">
                    <div className="top-post-name-title">K Crush</div>
                    <div className="top-post-name-hours">
                        <p>November 14 at 7:35 PM</p>
                        
                    </div>
                </div>
                <div className="top-post-icon">

                </div>
            </div>
        </div>
    </div>;
}

export default NewsContent