import React from 'react'
import LeftSide from '../components/leftSide/LeftSide'
import Feed from '../components/feed/Feed'
import RightSide from '../components/rightSide/RightSide'


const Home = () => {
  return (
    <div className='d-flex'>
   
        <LeftSide />
        <Feed />
        <RightSide />

       
    </div>
    
  )
}

export default Home