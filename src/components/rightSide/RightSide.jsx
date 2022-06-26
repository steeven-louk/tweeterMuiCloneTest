import styled from '@emotion/styled';
import { Avatar, Box, Button, InputBase, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import {SearchOutlined, Image, MoreHoriz} from '@mui/icons-material';


const Search = styled('div')(({ theme }) => ({
  
  borderRadius: "35px",
  backgroundColor: "#eee",
  padding:"5px",
  marginRight: "10px",
  marginLeft: 0,
  width: '100%',
  
}));

const SearchBox = styled('div')({
  position: 'sticky',
  top: 0,
  padding:"10px",
  background:"#fff",
  boxShadow: "2px 1px 2px #ccc",
  width: "100%",
  zIndex:25
})

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: "2px",
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  alignItems: 'center',
  justifyContent: 'center',
}));


const RightSide = () => {
  return (
    <Box flex={2} sx={{ height:'100vh' }}>
    
      <Box >
          <SearchBox>
            <Search>
              <SearchIconWrapper>
                <SearchOutlined />
              </SearchIconWrapper>
              <InputBase
                placeholder="Recherche Twitter"
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
                pl="5px"
              />
            </Search>
          </SearchBox>

          <Box sx={{ padding:"0 20px 20px 17px" }}>
            <Box component="div" className="tendancesContent" >
                <Typography variant='h5' fontWeight="bold">
                    Tendances pour vous
                </Typography>

                <Stack>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding >
                <ListItemText primary="Tendance dans la catégorie France" secondary="#canicule" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding>
                <ListItemText primary="Politique · Tendances" secondary="#FreeSenegal" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding>
                <ListItemText primary="Sport · Tendances" secondary="Juan Branco" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding >
                <ListItemText primary="Tendance dans la catégorie France" secondary="#canicule" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding>
                <ListItemText primary="Politique · Tendances" secondary="#FreeSenegal" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding>
                <ListItemText primary="Sport · Tendances" secondary="Juan Branco" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding >
                <ListItemText primary="Tendance dans la catégorie France" secondary="#canicule" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding>
                <ListItemText primary="Politique · Tendances" secondary="#FreeSenegal" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                <Box
              component="div"
              display="flex"
              alignItems="center"
              className='tendancesItem'
            >
              <ListItem disablePadding>
                <ListItemText primary="Sport · Tendances" secondary="Juan Branco" />
              </ListItem>

              <MoreHoriz className='MoreIconItem'/>
                </Box>

                </Stack>
            </Box>

            <Box component="div" pt="20px" mb="25px" className="tendancesContent">
              <Typography variant="h5" fontWeight={700}>
                Suggestions
              </Typography>
              <Box
              component="div"
              display="flex"
              alignItems="center"
            >
              <ListItem disablePadding>
                <ListItemAvatar>
                  <Avatar>
                    <Image />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="john doe" secondary="@johnDoe" />
              </ListItem>

              <Button className="bg-dark text-white rounded" >Suivre</Button>
            </Box>

            <Box
              component="div"
              display="flex"
              alignItems="center"
            >
              <ListItem disablePadding>
                <ListItemAvatar>
                  <Avatar>
                    <Image />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="john doe" secondary="@johnDoe" />
              </ListItem>

              <Button className="bg-dark text-white rounded" >Suivre</Button>
            </Box>

            </Box>

            {' '}

            Conditions d’utilisation
            Politique de Confidentialité
            Politique relative aux cookies
            Accessibilité
            Informations sur les publicités
            Plus
            <span className="fw-bold"> © 2022 TwitterCloneMui</span>, Inc.
          </Box>
      </Box>

    </Box>
  )
}

export default RightSide