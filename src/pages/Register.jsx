import { Box } from '@mui/material'
import React from 'react'
//import Login from '../components/register/login'
import SignIn from '../components/register/signIn'

const Register = () => {
  return (
    <div className='register_Container'>
      <div className="container pt-4 pb-3">
      <Box display='flex' className='componentBox'>
      <Box  sx={{ background:'rgba(255, 0, 0, 0.4)' }} flex={4}>
        j
      </Box>
      <Box flex={2} >
       {/**sx={{ background:'rgba(0, 0, 0, .91)' }}  */} 
        {/**<Login /> */}
        <SignIn />
      </Box>
    </Box>
      </div>
    </div>
  )
}

export default Register