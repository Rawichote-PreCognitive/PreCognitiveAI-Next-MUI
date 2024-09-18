import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ 
        backgroundColor: 'black',
        width: '100%',
        margin: '0 auto' }}>
      <Toolbar>
        <Image src="/logos/logo_only.png" alt="logo" width={40} height={40} />
        <Typography variant="h4" component="div" sx={{ 
          color: 'white', 
          marginLeft: 2, 
          fontFamily: 'Comfortaa, sans-serif',
          fontWeight: 700 }}>
            PreCognitive
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
