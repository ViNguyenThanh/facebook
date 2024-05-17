import { Avatar, FormControl, InputAdornment, InputBase, TextField } from '@mui/material';
import React from 'react'

import post_ava from "/assets/ava/k_crush.jpg"
import spell_post from "/assets/img/spell.jpg"
import like from "../../../assets/icon/like.png"
import heart from "../../../assets/icon/heart.png"
import comment from "../../../assets/icon/chat.png"
import share from "../../../assets/icon/forward.png"
import like_btn from "../../../assets/icon/like-line.png"
import comment_btn from "../../../assets/icon/chat-bubble.png"
import share_btn from "../../../assets/icon/share-arrow.png"

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

import NewsPost from "../../../data/NewsPost.json"

const NewsContent = () => {

    const listButton = [
        {
            id: 1,
            img: like_btn,
            name: "Like",
        },
        {
            id: 2,
            img: comment_btn,
            name: "Comment",
        },
        {
            id: 3,
            img: share_btn,
            name: "Share",
        }
    ]

    // console.log(NewsPost.sort(() => Math.random() - 0.5))
    // Giá trị ngẫu nhiên này có thể âm hoặc dương, do đó, mỗi lần so sánh hai phần tử trong mảng, 
  // hàm so sánh sẽ trả về một giá trị ngẫu nhiên âm hoặc dương, dẫn đến việc các phần tử được xáo trộn một cách ngẫu nhiên.
    const shuffleData = (array) => {
        return array.sort(() => Math.random() - 0.5)
    }
    

    return <div className='newscontent-container'>
        {shuffleData(NewsPost).map((post) => (
            <div className="post">
                <div className="top-post">
                    <div className="top-post-ava">
                        <img src={post.avatar} />
                    </div>
                    <div className="top-post-name">
                        <p className="top-post-name-title">{post.username}</p>
                        <small className="top-post-name-hours">{post.time}</small>
                    </div>
                    <div className="top-post-icon">
                        <MoreHorizIcon className='icon1' />
                        <CloseIcon className='icon2' />
                    </div>
                </div>

                <p className='newscontent-content'>{post.postContent}</p>

                {/* muốn chỉnh thẻ img thì phải để className nằm phía sau */}
                <img src={post.postImage} className='newscontent-img' />

                <div className="newscontent-reaction">
                    <img src={like} className='icon1' />
                    <img src={heart} className='icon2' />
                    <span>JohnWish and 200 others</span>

                    <div className="comment">
                        <div className="number-of-comments">
                            <p>321</p>
                            <img src={comment} />
                        </div>
                        <div className="number-of-shares">
                            <p>178</p>
                            <img src={share} />
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "darkgray", height: "1px", width: "95%", margin: "10px 10px 5px" }}></div>

                <div className="newscontent-button">
                    {listButton.map((item) => (
                        <div className="button" key={item.id}>
                            <img src={item.img} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                <div style={{ backgroundColor: "darkgray", height: "1px", width: "95%", margin: "5px 10px 10px" }}></div>

                <div className="newscontent_list-comment">
                    <p className='view-more'>View more comments</p>

                    <div className="user-comment">
                        <img src={post_ava} />
                        <div className="comment">
                            <p>Elys Gabriela</p>
                            <p>Yeahhhhh!</p>
                        </div>
                    </div>

                    <div className="input-comment">
                        <img src={post_ava} />
                        <div className="user-input">
                            <input type="text" className='input' placeholder='Write a comment...' />
                            <SendIcon className='icon' />
                        </div>
                    </div>
                </div>
            </div>
        ))}

    </div>;
}

export default NewsContent
