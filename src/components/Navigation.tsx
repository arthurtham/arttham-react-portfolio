import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import ProfilePicture from '../assets/images/arthur-tham-profile-yellow.jpg';

const drawerWidth = 240;
const navItems = [
  ['About', 'about'], 
  ['Skills', 'expertise'], 
  ['Career', 'history'], 
  ['Education', 'education'], 
  ['Projects', 'projects'], 
  ['Contact', 'contact']
];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    // console.log(section)
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth' });
      // console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
    } else {
      // console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Navigation</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const name = (
    <div style={{ display: "flex", flexDirection: "row", paddingRight: "20px"}}>
      <img src={ProfilePicture} style={{ height: "40px", borderRadius:"20em"}} alt="Arthur Tham Cartoon Head" />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "1rem" }}>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold", lineHeight: 1, margin: 0 }}>Arthur</span>
        <span style={{ fontSize: "0.75rem", lineHeight: 1, margin: 0 }}>Arthur Tham</span>
      </div>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <div className='navigation-bar-left'>
          {name}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: '#fff' }}>
                {item[0]}
              </Button>
            ))}
          </Box>
          </div>
          <div className="navigation-bar-right">
            {mode === 'dark' ? (
              <LightModeIcon onClick={() => modeChange()}/>
            ) : (
              <DarkModeIcon onClick={() => modeChange()}/>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1, mr: 0, display: { md: 'none',  } }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;