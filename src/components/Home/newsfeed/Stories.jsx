import React, { useEffect, useState } from 'react'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import listStories from "../../../data/StoriesList.json"
import { Avatar } from '@mui/material'

const Stories = () => {
    // dùng useState khi muốn chỉnh giá trị mà ko phải chỉnh tay thủ công
    // bản chất useEffect khi vừa vào là: 
    // Nếu k truyền dependencies thì nó sẽ render đúng 1 lần duy nhất
    // còn nếu truyền thì sau dependencies là một mảng chứa rất nhiều biến và chỉ cần 1 biến thay đổi là nó sẽ thực thi lại cái function đó

    const [position, setPosition] = useState(0) // set vị trí position ban đầu là 0
    const space = 200;

    const [showLeftButton, setLeftButton] = useState(false)
    const [showRightButton, setRightButton] = useState(false)

    // cần tạo biến để thay đổi giá trị độ dài của .stories-container, .stories khi bấm Trái Phải
    const [containerWidth, setContainerWidth] = useState(0)
    const [storiesWidth, setStoriesWidth] = useState(0)

    useEffect(() => {
        const storiesContainer = document.querySelector(".stories-container") //lấy thẻ có class stories-container
        const stories = document.querySelector(".stories") //lấy thẻ có class stories
        const parentWidth = storiesContainer.clientWidth //lấy chiều dài width của thằng class stories-container
        const storiesWidth = stories.clientWidth //lấy chiều dài width của thằng class stories
        // nhớ tạo nút bấm Trái Phải r mới code tiếp
        setContainerWidth(parentWidth)
        setStoriesWidth(storiesWidth)
        handleScroll(parentWidth, storiesWidth, position)
        // console.log(containerWidth);
        // console.log(storiesWidth)
    }, [position])

    const handleScroll = (containerWidth, storiesWidth, position) => {
        setLeftButton(position < 0) //position: 0 < 0 false
        setRightButton(containerWidth - position < storiesWidth) //false
    }
    //containerwidth: 614, storiesWidth: 489, position: 0 614 + 200 < 489
    //bản thân storiesWidth phải > containerwidth thì mới kéo qua lại đc 
    // vào .stories css tắt bỏ điều kiện width: 80% để nó trở lại bth
    //=> containerwidth: 614, storiesWidth: 1850, position: 0 614 + 200 < 1850

    
    // positon: 0 
    // ấn nút bấm qua trái, khung .stories chạy về sau 200px thì positon: 0 + 200px = 200px
    // ấn nút bấm qua phải, khung .stories chạy về trước 200px thì positon: 200 - 200px = 0
    const handleScrollLeft = () => {
        setPosition(prev => prev + space)
    }
    const handleScrollRight = () => {
        setPosition(prev => prev - space)
    }

    /* tập viết .story-box css ở trang jsx */
    // function style (){

    // }
    const styleStory = (urlImage) => {
        return { // nhận vào urlImage thì phải return{} trả ra ko sẽ bị lỗi
            // các thuộc tính ở đây ko xổ ra nên phải tự viết tay
            backgroundImage: `url(${urlImage})`,
            width: "130px",
            height: "200px",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
            flex: "0 0 auto", // quên nghĩa thì nhớ search chatGPT
            position: "relative" // làm gốc để chỉnh cho .username
        }
    }

    return (
        <div className='stories-container'>
            {/* để khi khung stories sát bên trái thì ko thấy nút Left
                                     sát bên phải thì ko thấy nút Right*/}
            {showLeftButton &&
                <div className="scroll-button left" onClick={handleScrollLeft}>
                    <ArrowBackIosNewIcon />
                </div>
            }
            {showRightButton &&
                <div className="scroll-button right" onClick={handleScrollRight}>
                    <ArrowForwardIosIcon />
                </div>
            }
            {/* <div className="scroll-button right" onClick={handleScrollRight}>
                    <ArrowForwardIosIcon />
                </div> */}

            {/* sau khi chỉnh hết css r thì cái khung .stories vẫn bị bành rộng ra
            => đây là lúc xài đến position để set vị trí cho nó (lúc này chưa làm nút nha)*/}
            <div className="stories" style={{ transform: `translateX(${position}px)` }}>  {/* dịch chuyển một phần tử theo trục X (ngang) của nó, di chuyển phần tử sang phải vd 10px từ vị trí ban đầu của nó*/}
                {listStories.map((story) => (
                    <div key={story.id}
                        className="story-box"
                        /*style={{ backgroundImage: `url(${story.background})` }} */
                        style={styleStory(story.background)} >
                        <Avatar
                            alt=""
                            src={story.avatar}
                            style={{ zIndex: "2", border: "3px solid white" }} />
                        <p className='username'>{story.username}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stories




// import React from 'react'
// import listStories from '../../../data/StoriesList.json'
// import { Avatar } from '@mui/material'
// const Stories = () => {
//         const styleStory = (urlImage) => {
//         return { // nhận vào urlImage thì phải return{} trả ra ko sẽ bị lỗi
//             // các thuộc tính ở đây ko xổ ra nên phải tự viết tay
//             backgroundImage: `url(${urlImage})`,
//             width: "100px",
//             height: "200px",
//             padding: "10px",
//             borderRadius: "10px",
//             color: "white",
//             cursor: "pointer",
//             flex: "0 0 auto", // quên nghĩa thì nhớ search chatGPT
//             position: "relative" // làm gốc để chỉnh cho .username
//         }
//     }
//     return (
//         <div className='stories-container'>
//             <div className="stories" >
//                 {listStories.map((story) => (
//                     <div className="story-box"
//                     style={styleStory(story.background)}
//                     >
//                         <Avatar src={story.avatar} 
//                          style={{ zIndex: "2", border: "3px solid white" }}/>
//                         <p>{story.username}</p>
//                     </div>
//                 ))}
//             </div>


//         </div>
//     )
// }

// export default Stories
