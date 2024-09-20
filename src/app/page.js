// src/app/page.js
"use client"; // Add this directive at the top

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar.js';
import footer from './footer.js';
import ParallaxBackground from './ParallaxBackground';
import MarkdownContent from './MarkdownContent';


export default function Home() {
  // JSON array of content sections: 
  // [{ section: string, content: string, image: string, alt: string, menu: string }]
  // menu can be: Products, Services, Success Stories, About Us
  // The menu field is used for adding the section to the associated menu on the Navbar
  const [content, setContent] = useState([]);
  // Array of React components for each content section, which comprise of
  // - Rendered MarkdownContent components
  // - ParallaxBackground components
  const [sections, setSections] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getContents');
        
        if (response.status === 404) {
          console.error('API endpoint not found (404)');
          return;
        }

        const { success, data, error } = await response.json();
        
        if (success && data.length > 0) {
          setContent(data);
          console.log(`Fetched ${data.length} sections`);
          console.log(data);
          // Generate React components for each content section
          const markdownContent = data.map((content, index) => (
            <React.Fragment key={index}>
              <MarkdownContent
                id={content.section}
                content={content.content}
                imgSrc={content.image}
                imgAlt={content.alt}
              />
              <ParallaxBackground height="30vh" />
            </React.Fragment>
          ));
          setSections(markdownContent);
        } else {
          console.error('Error fetching content data');
          if (data.length === 0) {
            console.error('No data returned');
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData(); // Call the fetchData function
  }, []);

  return (
    <>
      <Navbar content={content} />
      <ParallaxBackground height="20vh" />
      <Box sx={{ overflow: 'visible' }}>
        {sections.length > 0 && sections}
        {footer}
      </Box>
    </>
  );
}