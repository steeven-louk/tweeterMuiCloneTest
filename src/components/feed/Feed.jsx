import styled from '@emotion/styled'
import { StarPurple500, AddLocationOutlined, SentimentSatisfiedAltOutlined, InsertInvitationOutlined, InsertChartOutlinedTwoTone, Image, GifBoxOutlined, ImageOutlined } from '@mui/icons-material'
import { Avatar, Box, ListItemAvatar, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Tweet from '../tweet/Tweet'
import JsFileDownloader from 'js-file-downloader'

//import {saveAs} from 'file-saver'

const HeaderStyle = styled(Box)({
  position: "sticky",
  top:0,
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",

  background:"#fff"
})

function savee () {
  const fileUrl = 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600';

new JsFileDownloader({ 
    url: fileUrl
  }).then(console.log('enregistrer'))
}

const Feed = () => {

  const [post, setPost] = useState('');
  const [tweet, setTweet] = useState([]);
  const [imgPost, setImgPost] = useState();
  const [gifPost, setGifPost] = useState();
 
  
  /*const [selectedFile, setSelectedFile] = useState();
   const [isSelected, setIsSelected] = useState(false);*/

  console.log('POST:::::::::', post);
  console.log('POST:::::::::', imgPost);


  
 /* const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
    };*/

  const AddTweet = (e) =>{

    e.preventDefault();

    try {
      setTweet([...tweet,{
      postMessages: post,
      addImg:imgPost,
     
      
    }])

    setPost('');
   
    } catch (error) {
      console.log('err', error)
    }
    
  }

  console.log('tweet',tweet);

  return (
    <Box flex={3}>
      <HeaderStyle>
        <Typography fontWeight="bold">
          Acceuil
        </Typography>
        <StarPurple500 />
      </HeaderStyle>

      <Box variant="div" sx={{ borderBottom:"1px solid red" }}>
        <button onClick={()=> savee()}>kjhgfghjkl</button>
      <form onSubmit={AddTweet}>
        <Box display="flex" pb="5px">
            <ListItemAvatar pt="5px">
              <Avatar >
                <Image />
              </Avatar>
            </ListItemAvatar>
            <TextField multiline type='text' value={post} onChange={(e)=> setPost(e.target.value)} name="postMessages" id="postMessages" color="error" variant='filled' fullWidth placeholder='Quoi de neuf ?' />
          </Box>

          <Stack direction="row" pt="20px" className='pe-3' justifyContent="space-between">
              <div className="d-flex">
                <label htmlFor="addImage">
                  <ImageOutlined mr="10px" cursor="pointer" />
                </label>
                <input value={imgPost} onChange={(e)=> setImgPost(e.target.files[0])} type="file" className="d-none" name="addImage" id="addImage" />
                
                <label htmlFor="Addgif">
                  <GifBoxOutlined  mr="10px" cursor="pointer" />
                </label>
                <input type="file" value={gifPost} onChange={(e)=> setGifPost(e.target.value)} name="Addgif" id="Addgif" className="d-none"/>

                <InsertChartOutlinedTwoTone mr="10px" cursor="pointer"/>
                <SentimentSatisfiedAltOutlined mr="10px"  cursor="pointer"/>
                <InsertInvitationOutlined mr="10px"  cursor="pointer"/>
                <AddLocationOutlined  cursor="pointer"/>
              </div>
              <button type='submit' className="bg-primary text-white rounded border-0 p-1 text-capitalize">
                  tweeter
              </button>
          </Stack>
      </form>
       
      </Box> <br />

      {tweet && tweet.map((postTweet, index) =>{
        return <Tweet tweet={postTweet}  key={index}/>
      })}
      
    </Box>
  )
}

export default Feed