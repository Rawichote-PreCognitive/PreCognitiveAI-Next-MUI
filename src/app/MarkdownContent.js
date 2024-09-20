"use client"; // Add this directive at the top

import { Container, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './page.module.css'; // Import the CSS module
import ParallaxBackground from './ParallaxBackground';

// Usage

// MarkdownContent may have to accept key prop in the case of mapping through an array of MarkdownContent components.
// The key prop is used by React to identify which items have changed, are added, or are removed.
const MarkdownContent = ({ id, content, imgSrc, imgAlt }) => {
  return (
    <>
      {/* <ParallaxBackground height="20vh" /> */}
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
    </>
  );
};

export default MarkdownContent;