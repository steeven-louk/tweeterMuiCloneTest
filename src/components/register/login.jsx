import styled from '@emotion/styled'
import { LockOutlined, PersonOutlineOutlined } from '@mui/icons-material'
import { Alert, Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const LoginBtn = styled(Button)({
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

const Login = () => {


  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');
  const [alertStatus, setAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate =useNavigate()
  
  const onSubmitUser = (e) =>{
    e.preventDefault();


    const data = JSON.parse(localStorage.getItem('profile'));
    if(userName !== data[0].username || password !== data[0].password ){
      setAlert(true);
      setErrorMsg(' user name or password is incorrect');
      setUserName('');
      setPassword('');
    } 

    else{
     // alert(`submit bienvenu, ${data[0].username}`);
      navigate('/home',{ replace:true})

    }
   
    
  }

  return (
    <Box variant='div' mt='15em' className='text-white'>
      <Typography variant='h6'>Login to your account</Typography>

      <form onSubmit={onSubmitUser} pt='15px'>
        <FormControl>
          <TextField
          color='error'
          name='username'
          value={userName}
          onChange={(e)=> setUserName(e.target.value)}
          type='text'
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
          
          type='password'
          required
          name='password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
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
          <LoginBtn type='submit'>Login</LoginBtn>
        </Box>
      </form>
      <span>forget password ?</span> <br />

      {alertStatus && <Alert severity="error" sx={{ background:'green', color:'white' }}>{errorMsg}</Alert>}
    </Box>
  )
}

export default Login