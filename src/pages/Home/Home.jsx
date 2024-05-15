import React from 'react'
import "./Home.css"

import LeftHome from '../../components/Home/LeftHome';
import NewsFeed from '../../components/Home/newsfeed/NewsFeed';
import RightHome from '../../components/Home/RightHome';



const Home = () => {
  return (
    <div className="home-container">
      {/* vì chỉnh độ dài bằng flex thì phải code trong đây lun, 
        chứ flex ko thể ăn trên component đc
        => chỉnh width bằng % cho chắc ăn để ko bị lỗi phần stories nữa */}
      <LeftHome />
      <NewsFeed />  
      <RightHome />  
    </div>
 
)};

export default Home;
