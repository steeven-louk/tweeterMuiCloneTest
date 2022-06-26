import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Login from '../components/register/login'
import SignIn from '../components/register/signIn'

const Register = () => {

  const [isRegister, setIsRegister] = useState(false);

  const data = JSON.parse(localStorage.getItem('profile'));
 
useEffect(() => {
  return () => {
    if(data){
      setIsRegister(true);
    }
  };
}, [data])

  return (
    <div className='register_Container'>
      <div className="container pt-4 pb-3">
      <Box display='flex' className='componentBox'>
      <Box  sx={{ background:'rgba(255, 0, 0, 0.4)' }} flex={4}>
        j
      </Box>
      <Box flex={2} >
       {/**sx={{ background:'rgba(0, 0, 0, .91)' }}  */} 
        {/** */}
        {isRegister === false ? <SignIn /> : <Login />}
        
      </Box>
    </Box>
      </div>
    </div>
  )
}

export default Register