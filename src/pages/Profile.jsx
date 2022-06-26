import styled from '@emotion/styled'
import { ArrowBack, CalendarMonthOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import TweetReponse from '../components/tabsSection/tweet-reponse'
import Media from '../components/tabsSection/Media'
import Like from '../components/tabsSection/Like'
import Tweets from '../components/tabsSection/Tweets'


const HeaderStyle = styled(Box)({
  position: "sticky",
  top:0,
  display: "flex",
  padding: "15px",
  zIndex: 25,
  background:"#c0c0c0"
})


const Profile = () => {


  const [section, setSection] = useState('card1');



  return (
    
    <Box>
      <HeaderStyle>
      <ArrowBack sx={{ marginTop:'10px' }}/>
      
      <div className="d-flex flex-column mx-5">
        <Typography fontWeight="bold">
        Eve
      </Typography>
      <span>0 Tweet</span>
      </div>
   
  </HeaderStyle>

    <Box className='profil-container' >
      <Box variant='div' className='profil-picture-box' position='relative' >
        <Box variant='img-box' maxWidth='100%' height='250px'>
          <img width='100%' height='100%' src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </Box>
        <Box className='profil-picture'>
          <img src="https://randomuser.me/api/portraits/women/16.jpg" alt="" />
        </Box>
        <Button sx={{float:'right' }} variant='contained'>Editer le profil</Button>
      </Box>
      <br />
    </Box>

    <Box variant='div' pt='50px'>
      <div className="d-flex flex-column mb-2">
          <Typography fontWeight="bold">
          eve
        </Typography>
        <span>@boutman</span>
      </div>

          <Typography><CalendarMonthOutlined/> A rejoint Twitter en janvier 2029</Typography> <br />

          <Stack direction='row' gap={2}>
            <Typography><span className='fw-bold'>9</span> abonnements</Typography>
            <Typography><span className='fw-bold'>0</span> abonné</Typography>
          </Stack>
        </Box>

        <Box sx={{ width: '100%' }}>

        <Tab  label="Tweets" onClick={()=> setSection('card1')} />
        <Tab  label="Tweets et réponses" onClick={()=> setSection('card2')}/>
        <Tab  label="Média" onClick={()=> setSection('card3')}/>
        <Tab  label="J'aime" onClick={()=> setSection('card4')}/>

    </Box>

    <Box>
     {section === 'card1'  && <Tweets /> }
     {section === 'card2' && <TweetReponse/> }
     {section === 'card3' && <Media/> }
     {section === 'card4' && <Like/> }
    </Box>


    </Box>

  )
}

export default Profile