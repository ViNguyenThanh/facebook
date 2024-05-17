import React from 'react'
import './NewsFeed.css'
import Stories from './Stories'
import PostStatus from './PostStatus'
import NewsContent from './NewsContent'

const NewsFeed = () => {
  return (
    <div className='newsfeed-container'>
        <Stories/>
        <PostStatus/>
        <NewsContent/>
    </div>
  )
}

export default NewsFeed