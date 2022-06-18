import styled from '@emotion/styled'
import { Twitter, AccessibilityNewOutlined, Home, Sms, NoteAltOutlined, FlashOn, Settings, HelpOutlineOutlined, DomainVerification, Equalizer, RocketLaunch, Tag, Notifications, Mail, Bookmark, Image, Article, PersonOutline, PendingRounded, MoreHoriz  } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import React, { useState } from 'react'


const TweetButton = styled(Button)(
   {
    background: "#00C5FF",
    color:"#fff",
    borderRadius: "35px",
    padding: "12px",
    width: "180px",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "16px",
    marginTop:"20px",

    "&:hover":{
        backgroundColor: "#00A1D1"
    }
   }
)

const MenuListStyle = styled(MenuList)({
    border: "1px solid black",
    boxShadow:"0px 1px 3px 2px #000",
    borderRadius: "5px"
})

const LeftSide = () => {


     const [open, setOpen] = useState(false)

  return (
    <Box flex={1.5}>
      <Box position="fixed">
        <nav
          style={{ height: "100vh", width: "100%", paddingLeft: "55px" }}
          className="pe-5"
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                className="nav-left-button"
                href="/"
              >
                <ListItemIcon>
                  <Twitter />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                className="nav-left-button"
                href="/"
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Acceuil" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                className="nav-left-button"
                href="/"
              >
                <ListItemIcon>
                  <Tag />
                </ListItemIcon>
                <ListItemText primary="Explorer" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                className="nav-left-button"
                href="/"
              >
                <ListItemIcon>
                  <Notifications />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                className="nav-left-button"
                href="/"
              >
                <ListItemIcon>
                  <Mail />
                </ListItemIcon>
                <ListItemText primary="Message" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                className="nav-left-button"
                href="/"
              >
                <ListItemIcon>
                  <Bookmark />
                </ListItemIcon>
                <ListItemText primary="Signets" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                className="nav-left-button"
                href="/"
              >
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Listes" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                className="nav-left-button"
                href="/"
              >
                <ListItemIcon>
                  <PersonOutline />
                </ListItemIcon>
                <ListItemText primary="Profil" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding position="relative">
              <ListItemButton
                onClick={()=> setOpen(!open)}
                className="nav-left-button"
                
              >
                <ListItemIcon>
                  <PendingRounded />
                </ListItemIcon>
                <ListItemText primary="Plus"  />
              </ListItemButton>

          
              
            </ListItem>
            <MenuListStyle open={open} className={!open ? "menu-List" : "show-menu-list"} onClose={()=> setOpen(false)}>
                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <Sms />
                        </ListItemIcon>
                        <ListItemText primary="Sujets" />
                    </MenuItem>

                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <FlashOn />
                        </ListItemIcon>
                        <ListItemText primary="Moments" />
                    </MenuItem>

                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <Article />
                        </ListItemIcon>
                        <ListItemText primary="Newsletters" />
                    </MenuItem>

                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <RocketLaunch />
                        </ListItemIcon>
                        <ListItemText primary="Twitter pour les proffessionnels" />
                    </MenuItem>

                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <DomainVerification />
                        </ListItemIcon>
                        <ListItemText primary="Publicités Twitter" />
                    </MenuItem>

                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <Equalizer />
                        </ListItemIcon>
                        <ListItemText primary="Statistiques" />
                    </MenuItem>
                  
                <Divider />

                    <MenuItem disablePadding className="mb-1 p-3">
                    <ListItemIcon>
                          <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Paramètres et confidentialité" />
                    </MenuItem>

                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <HelpOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Centre d'assistance" />
                    </MenuItem>

                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <NoteAltOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Affichage" />
                    </MenuItem>

                    <MenuItem disablePadding className="mb-1 p-3">
                        <ListItemIcon>
                          <AccessibilityNewOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Raccourcis clavier" />
                    </MenuItem>

            </MenuListStyle>

            <TweetButton>Tweeter</TweetButton>
          </List>

          <Box
            component="div"
            sx={{ position: "absolute", bottom: "50px", border:"1px solid #ccc", borderRadius:"35px", width:"15em", padding:"2px" }}
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

            <MoreHoriz />
          </Box>
        </nav>
      </Box>
    </Box>
  );
}

export default LeftSide