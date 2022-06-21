import { ChatOutlined, FavoriteBorderOutlined, MoreVert, ReplyAllOutlined, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Tweet = (postTweet,selectedFile,isSelected) => {


    console.log(postTweet);
  return (
    
    <Box className='post px-4' >

    <Card sx={{ maxWidth: '100%', marginBottom:'25px' }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red', width:'50px', height:'50px' }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Netflix France"
      subheader="14 juin"
    />
    
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {postTweet.tweet.postMessages}
      </Typography>
    </CardContent>

     
    <CardMedia
      component="img"
      sx={{ borderRadius:"25px" }}
      src="https://images.pexels.com/photos/12420468/pexels-photo-12420468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="Paella dish"
    />

    <CardActions sx={{ display:'flex', justifyContent:'space-between' }}>
      <IconButton aria-label="chat ">
        <ChatOutlined />
        <Typography variant='span'>125</Typography>
      </IconButton>

      <IconButton aria-label=" ">
        <ReplyAllOutlined/>
        <Typography variant='span'>6</Typography>
      </IconButton>

      <IconButton aria-label="Add to favorite">
      <FavoriteBorderOutlined/>
      <Typography variant='span'>26</Typography>
      </IconButton>

      <IconButton aria-label="share">
        <Share />
      </IconButton>

    </CardActions>
   
    </Card>


    <Card sx={{ maxWidth: '100%', marginBottom:'25px' }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red', width:'50px', height:'50px' }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Netflix France"
      subheader="14 juin"
    />
    
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>

    <CardMedia
      component="img"
      sx={{ borderRadius:"25px" }}
      image="https://images.pexels.com/photos/12405196/pexels-photo-12405196.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="Paella dish"
    />

    <CardActions sx={{ display:'flex', justifyContent:'space-between' }}>
      <IconButton aria-label="chat ">
        <ChatOutlined />
        <Typography variant='span'>125</Typography>
      </IconButton>

      <IconButton aria-label=" ">
        <ReplyAllOutlined/>
        <Typography variant='span'>6</Typography>
      </IconButton>

      <IconButton aria-label="Add to favorite">
      <FavoriteBorderOutlined/>
      <Typography variant='span'>26</Typography>
      </IconButton>

      <IconButton aria-label="share">
        <Share />
      </IconButton>

    </CardActions>
   
    </Card>

    
    <Card sx={{ maxWidth: '100%', marginBottom:'25px' }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red', width:'50px', height:'50px' }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Netflix France"
      subheader="14 juin"
    />
    
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>

    <CardMedia
      component='video'
      
      sx={{ borderRadius:"25px" }}
      src="https://player.vimeo.com/external/519355523.sd.mp4?s=a983b0cb48efd90e553cf72f5117d79edb431dd1&profile_id=165&oauth2_token_id=57447761"
      alt="Paella dish"
    />

    <CardActions sx={{ display:'flex', justifyContent:'space-between' }}>
      <IconButton aria-label="chat ">
        <ChatOutlined />
        <Typography variant='span'>125</Typography>
      </IconButton>

      <IconButton aria-label=" ">
        <ReplyAllOutlined/>
        <Typography variant='span'>6</Typography>
      </IconButton>

      <IconButton aria-label="Add to favorite">
      <FavoriteBorderOutlined/>
      <Typography variant='span'>26</Typography>
      </IconButton>

      <IconButton aria-label="share">
        <Share />
      </IconButton>

    </CardActions>
   
    </Card>
    </Box>
  )
}

export default Tweet