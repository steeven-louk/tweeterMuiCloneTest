import styled from '@emotion/styled'
import { LockOutlined, PersonOutlineOutlined } from '@mui/icons-material'
import { Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './login'



const SignInBtn = styled(Button)({
  color: "#ff0000",
  fontWeight: 'bold',
  border: '2px solid #ff0000',
  padding:'10px',
  width: '10rem',
  borderLeft: 0,
  borderTopRightRadius: '25px',
  borderBottomRightRadius: '25px',
  marginRight: '15px',
  marginTop:'30px'
})

const SignIn = () => {


    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [profile, setAddprofile] = useState([]);
    

    const Submit = async(e) =>{
        e.preventDefault();

        try {
         await setAddprofile([...profile, {
            username: userName,
            email: email,
            password: userPassword,
            
          }]);


            localStorage.setItem('profile',JSON.stringify(profile) );
          
         
        } catch (error) {
          console.log("error", error);
        }
        
        console.log('profile', profile)
    }
    //console.log(isRegister);


  return (
    <>
    
 
    <Box variant='div' mt='15em' className='text-white'>
      <Typography variant='h6'>SignIn to your account</Typography>

      <form onSubmit={Submit} pt='15px'>
        <FormControl>
          <TextField
          color='error'
          type='text'
          name='username'
          value={userName}
          onChange={(e)=> setUsername(e.target.value)}
          required
          
          placeholder='User name'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <PersonOutlineOutlined  className='iconRegister'/>
              </InputAdornment>
            ),
          }}
          variant="filled"
          className='inputRegister'
        />

        <TextField
          color='error'
          type='email'
          name='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
         
          placeholder='Email'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <PersonOutlineOutlined  className='iconRegister'/>
              </InputAdornment>
            ),
          }}
          variant="filled"
          className='inputRegister'
        />

        <TextField
         
          name='password'
          type='password'
          value={userPassword}
          onChange={(e)=> setPassword(e.target.value)}
          required
          placeholder='Password'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined className='iconRegister' />
              </InputAdornment>
            ),
          }}
          variant="filled"
        />
        </FormControl>

        <Box variant='div'>
          <SignInBtn type='submit'>SignIn</SignInBtn>
        </Box>
      </form>

      <Link to={<Login/>}> <span>Login</span></Link><br />
      <span>forget password ?</span>
    </Box>

    </>
    ) 

    

  
}

export default SignIn