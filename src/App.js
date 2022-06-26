import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LeftSide from './components/leftSide/LeftSide';
import Login from './components/register/login';
import SignIn from './components/register/signIn';
import RightSide from './components/rightSide/RightSide';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' exact  element={<Register/>} >
          <Route path='' element={<Login/>} />
          <Route path='' element={<SignIn/>} />
        </Route>
        
      </Routes>

<Box className='d-flex'>
  <LeftSide />

  <Box variant='div' flex={3}>
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/profile/:username' element={<Profile/>} />
      </Routes>
  </Box>
      
    <RightSide />  
</Box>
  
    </div>
  );
}

export default App;
