import React from 'react';
import { Typography } from '@mui/material';

const iParagraph = ({ children }) => (
  <Typography sx={{ marginBottom: 2, fontFamily: 'Comfortaa' }}>
    {children}
  </Typography>
);

const iParagraphTitle = ({ children }) => (
  <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Comfortaa' }}>
    {children}
  </Typography>
);

export { iParagraph, iParagraphTitle };