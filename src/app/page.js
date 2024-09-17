import { Container, Box, Typography } from '@mui/material';
import GPTChainSection from './GPTChainSection.js';
import GenerativeAIServices from './GeneralAIServices.js';

export default function Home() {

  return (
    <>
      {/* Parallax Container */}
      <Box
        sx={{
          backgroundImage: `url(/background/bg01.png)`, // Path to your image in the public folder
          backgroundSize: 'cover', // Adjust as needed
          backgroundRepeat: 'repeat', // Allow the background image to repeat
          backgroundAttachment: 'fixed', // Implement parallax effect
          height: '50vh', // Adjust height as needed
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>

      {/* GPTChain Section */}
      {GPTChainSection}


      {/* Generative AI Service Section */}
      {GenerativeAIServices}
      

      
    </>
  );
}