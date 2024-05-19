import { Avatar, FormControl, InputAdornment, InputBase, TextField } from '@mui/material';
import React, { useState } from 'react'

import post_ava from "/assets/ava/k_crush.jpg"
import spell_post from "/assets/img/spell.jpg"
import like from "../../../assets/icon/like.png"
import heart from "../../../assets/icon/heart.png"
import comment from "../../../assets/icon/chat.png"
import share from "../../../assets/icon/forward.png"
import like_btn from "../../../assets/icon/like-line.png"
import comment_btn from "../../../assets/icon/chat-bubble.png"
import share_btn from "../../../assets/icon/share-arrow.png"
import liked_btn from "../../../assets/icon/like-btn.png" // mã màu của nút này: #1E93FF

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

import NewsPost from "../../../data/NewsPost.json"

// khi nào dùng () , {}
// (): xử lý html
// {}: xử lý logic

const listButton = [
    {
        id: 1,
        img: like_btn,
        name: "Like",
        click: "like", // để tạo cái key, để có cái so sánh đúng key nó mới chạy hàm
    },
    {
        id: 2,
        img: comment_btn,
        name: "Comment",
        click: "cmt",
    },
    {
        id: 3,
        img: share_btn,
        name: "Share",
        click: "share"
    }
]

const NewsContent = () => {


    // console.log(NewsPost.sort(() => Math.random() - 0.5))
    // Giá trị ngẫu nhiên này có thể âm hoặc dương, do đó, mỗi lần so sánh hai phần tử trong mảng, 
    // hàm so sánh sẽ trả về một giá trị ngẫu nhiên âm hoặc dương, dẫn đến việc các phần tử được xáo trộn một cách ngẫu nhiên.
    // const shuffleData = (array) => {
    //     return array.sort(() => Math.random() - 0.5)
    // }


    const [actionLike, setActionLike] = useState([]) // truyền vào mảng vì có thể nó like nhiều bài

    const [data, setData] = useState(NewsPost)

    const handleClick = (id) => {
        // alert("hello")
        // alert(id)

        const index = actionLike.indexOf(id) // kt trong actionLike có đang có id ko, có thì lấy vị trí ra, ko có thì ra -1, lấy cái vị trí của id mới nhất trong actionLike
        // console.log(index) // chưa code logic j ở dưới hết thì hiện tại trong actionLike chưa có j hết nên ra -1

        if (index === -1) {
            // 1. xử lý coi mình bấm like những bài nào
            setActionLike([...actionLike, id]) // copy actionLike // khi bấm like 1 bài thì ["post-1"], ko có thì []
            // console.log(actionLike) // bấm like 2 bài thì nó hiện "(2) ['post-3', 'post-1']" // nhớ viết ngoài hàm để thấy kq
            // console.log(index)
            // 2. xử lý khi mình bấm like thì nó phải cập nhật, trả ra tên ng bấm (peopleLike)

            // vì là xử lý logic hàm map nên NHỚ return 
            const addPeopleLike = data.map(element => { // lọc nguyên cái NewPost.json
                if (element.id === id) { // vd bấm vào bài có id: ["post-1"], thì nó dò nguyên file json, khi dò đc th id giống r nó mới chạy xuống dưới
                    // console.log(element) // nó ra thông tin của th mình bấm like
                    return { ...element, peopleLike: [...element.peopleLike, "Elys Gabriela"] } // copy cái phần tử của id đó, copy phần tử peopleLike và kèm thêm ["Elys Gabriela"] (tên ng bấm like)
                }
                return element
                // muốn thì test ngoài hàm: console.log(data) // vào xem peopleLike của th id mình bấm like sẽ thấy nó đã thêm ["Elys Gabriela"]
            })
            setData(addPeopleLike) // set lại data (cụ thể là phần tử của peopleLike) sau khi mình đã bấm like 1 bài viết nào đó
        } else {
            // 1. xử lý khi mình bỏ like những bài nào
            const updateLike = [...actionLike]
            // trong bài này là từ vị trí index (vị trí id mới nhất trong actionLike), 1 là số phần tử bị loại bỏ
            updateLike.splice(index, 1) // "a","b","c","d" => splice (2, 1) => "a","b","d"
            // "a","b","c","d" => splice (3, 1) => "a","b","c"
            setActionLike(updateLike)
            console.log(index)

            // 2. xử lý khi mình bỏ like thì nó phải cập nhật, phải mất tên ng bấm dislike (peopleLike)
            const removePeopleLike = data.map(element => {
                if (element.id === id) { // lọc nguyên cái NewPost.json
                    // console.log(element) // nó ra thông tin của th mình bấm like
                    return {
                        ...element, // copy cái phần tử của id đó
                        peopleLike: element.peopleLike.splice(0, element.peopleLike.length - 1)
                        /* array =["a","b","c","d"] 
                            array.splice(0,3) => "d" -> thay đổi trực tiếp trên array thành ["d"]
                            const tmp = array.splice(0,3) -> trả ra những th đã bị xóa vì có biến tmp hứng => ["a","b","c"]*/
                    }
                }
                return element
                // muốn thì test ngoài hàm: console.log(data) // vào xem peopleLike của th id mình bỏ like sẽ thấy nó đã mất ["Elys Gabriela"]
            })
            setData(removePeopleLike) // set lại data (cụ thể là phần tử của peopleLike) sau khi mình đã bỏ like 1 bài viết nào đó
        }
    }
    console.log(actionLike)
    console.log(data)

    // const handleClick = (id) => {
    // //    alert(id)
    //    const index = actionLike.indexOf(id)
    //    if (index === -1){
    //     setActionLike([...actionLike, id])
    //    }else{
    //     const updateLike = [...actionLike]
    //     updateLike.splice(index, 1)
    //     setActionLike(updateLike)
    //    }
    // }
    // console.log(actionLike)


    return (<div className='newscontent-container'>
        {/* phải tắt shuffleData tạm đã thì mới ctrl cách ra mấy cái field trong file json */}
        {NewsPost.map((post) => (
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
                    {/* <img src={heart} className='icon2' /> */}
                    {post.peopleLike.length > 1 ? (
                        <img src={heart} className='icon2' />
                    ): (
                        <img src=""/>
                    )}
                    {post.peopleLike.length > 1 ? (
                        <span>
                            {post.peopleLike[0]} and {post.peopleLike.length - 1} others
                        </span>
                    ) : (
                        <span>
                            {post.peopleLike[0]}
                        </span>
                    )}

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
                        <div className="button" key={item.id} onClick={() => {
                            item.click === "like" && handleClick(post.id) // truyền vào post.id để bấm like thì tính đúng cái bài đó thoy, ko bị dính toàn bộ
                        }}>
                            {/* <img src={item.img} /> */}
                            {item.click === "like"
                                ? ( actionLike.includes(post.id) ? <img src={liked_btn} /> : <img src={item.img} /> )
                                :  <img src={item.img} />}

                            <span
                                style={item.click === "like"
                                    ? {color: actionLike.includes(post.id) ? "rgb(29, 113, 202)" : ""}
                                    : {}}
                            >
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div style={{ backgroundColor: "darkgray", height: "1px", width: "95%", margin: "5px 10px 10px" }}></div>

                <div className="newscontent_list-comment">
                    <p className='view-more'>View more comments</p>

                    {post.listComment.map((cmt) => (
                        <div className="user-comment">
                            <img src={cmt.avatar} />
                            <div className="comment">
                                <p>{cmt.username}</p>
                                <p>{cmt.comment}</p>
                            </div>
                        </div>
                    ))}

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

    </div>
    );
}

export default NewsContent
