import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'

const ProfileList: React.FC = () => {
  return (
    <>
      
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Typography component='h2' variant='h2'>
                Profile
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ width: '100%' }}>
                <img style={{width: '100%', height: 'auto', borderRadius: '50%' }} src="/images/common/Profile2.jpg" alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ width: '100%', paddingLeft: {sx: '0px', md: '30px'} }}>
                <Typography variant='body2' color="text.secondary">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae nisi modi expedita molestiae at!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae nisi modi expedita molestiae at!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae nisi modi expedita molestiae at!</p>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Button variant='contained' size='large'>
                Learn More
              </Button>
            </Grid>
          </Grid>
    </>
  )
}

export default ProfileList