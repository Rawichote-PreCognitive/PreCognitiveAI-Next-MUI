import React from 'react';
import { Box } from '@mui/material'; // Assuming you're using Material-UI

const ParallaxBackground = ({ height }) => {

  const imageURL = '/background/bg01.png'; // Path to your image in the public folder

  return (
    <Box
      sx={{
        backgroundImage: `url(${imageURL})`, // Path to your image in the public folder
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'repeat', // Allow the background image to repeat
        backgroundAttachment: 'fixed', // Implement parallax effect
        height: height, // Use the height prop
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    </Box>
  );
};

export default ParallaxBackground;