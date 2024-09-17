import React from 'react';
import { Box, Container } from '@mui/material';
import Image from 'next/image';

const ProductSection = ({ id, imgSrc, imgAlt, children }) => {
  return (
    <section id={id}>
      <Box>
        <Container>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={500}
                height={500}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {children}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default ProductSection;