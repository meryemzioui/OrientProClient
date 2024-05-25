import PropTypes from 'prop-types';
import {
  
  Menu as MenuIcon,
} from "@mui/icons-material";
import FlexBetween from "../Components/FlexBetween";

import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Switch,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import { useState } from 'react';



// eslint-disable-next-line react/prop-types
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [mode, setMode] = useState('light');
  

  const theme = createTheme({
    palette:{
      mode:mode ? "light" : "dark"
     }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <AppBar
      sx={{
        position: "static",
        boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
      }}
    >
      <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
        {/* LEFT SIDE */}
        <FlexBetween>
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={theme.palette.info.light}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </FlexBetween>
          </Box>
        </FlexBetween>
       
        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
       <Switch onClick={()=>setMode(!mode)}></Switch>
        </FlexBetween>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};
Navbar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Navbar;
