import React from 'react'
import { FormControl, InputBase } from '@mui/material'

import image from "../../../assets/img/panda-avatar.jpg"
import video from "../../../assets/icon/video-stream.png"
import photo from "../../../assets/icon/photos.png"
import face from "../../../assets/icon/grin.png"


const PostStatus = () => {
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
  return (
    <div className='poststatus-container'>
      <div className="posting-place">
            <div className="top-posting-place">
                <div className="top-posting-place-img">
                    <img src={image} />
                </div>
                <div className="top-posting-place-write">
                    {/* <FormControl sx={{ m: 1 }} variant="standard" className='search-input'
                        style={{ width: "95%" }}>
                        <InputBase placeholder='What&apos;s on your mind, Elys?' />
                    </FormControl> */}
                    <input type="text" className='input' placeholder='What&apos;s on your mind, Elys?' />
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
    </div>
  )
}

export default PostStatus