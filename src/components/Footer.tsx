import React from 'react';
import { AppBar, Box, Container, Typography } from '@mui/material';


const Footer: React.FC = () => {
  return (
    <>
      <AppBar component="footer" position='static' sx={{ backgroundColor: '#000000' }}>
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant='caption'>
                @2023 engr-sng
              </Typography>
            </Box>
        </Container>
      </AppBar>
    </>
  );
}

export default Footer;
