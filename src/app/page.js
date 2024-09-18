// src/app/page.js
import React from 'react';
import {Box } from '@mui/material';
import GPTChainSection from './GPTChainSection.js';
import GenerativeAIServices from './GeneralAIServices.js';
import Navbar from './Navbar.js';
import footer from './footer.js';

export default function Home() {
  return (
    <>
      <Navbar />

      <Box sx={{ overflow: 'visible' }}>  {/* Ensure normal scrolling behavior */}
        {GPTChainSection}
        {GenerativeAIServices}
        {footer}
      </Box>
    </>
  );
}
