"use client"; // Add this directive at the top

import { Container, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './page.module.css'; // Import the CSS module

// This component renders a Markdown content with parallax effect
const MarkdownContent = ({ id, content, imgSrc, imgAlt }) => {
  return (
    <>
      <Box // Parallax Effect
        sx={{
          backgroundImage: `url(/background/bg01.png)`, // Path to your image in the public folder
          backgroundSize: 'cover', // Adjust as needed
          backgroundRepeat: 'repeat', // Allow the background image to repeat
          backgroundAttachment: 'fixed', // Implement parallax effect
          height: '20vh', // Vertical space for the parallax effect
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>
      <Box
        id={id}
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: 4,
          fontFamily: 'Comfortaa, sans-serif', // Apply Comfortaa font
        }}
      >
        <Container>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {imgSrc && (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  width={500}
                  height={500}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            )}
            <Box className={styles.markdownContent} sx={{ flex: 1 }}>
              <ReactMarkdown>{content}</ReactMarkdown>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box // Parallax Effect
        sx={{
          backgroundImage: `url(/background/bg01.png)`, // Path to your image in the public folder
          backgroundSize: 'cover', // Adjust as needed
          backgroundRepeat: 'repeat', // Allow the background image to repeat
          backgroundAttachment: 'fixed', // Implement parallax effect
          height: '20vh', // Vertical space for the parallax effect
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>
    </>
  );
};

export default MarkdownContent;