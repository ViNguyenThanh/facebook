import React from 'react'
import "./Home.css"

import LeftHome from '../../components/Home/LeftHome';
import NewsFeed from '../../components/Home/NewsFeed';
import RightHome from '../../components/Home/RightHome';


const Home = () => {
  return <div className="home-container">
    <LeftHome/>
    <NewsFeed/>
    <RightHome/>
  </div>;
};

export default Home;
