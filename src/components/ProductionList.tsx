import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'

import MediaCard from './MediaCard'

const ProductionList: React.FC = () => {

  const setMediaList = [
    {
      'title': 'タイトル1',
      'description': 'タイトル1の説明が入ります。',
      'image': '/images/production/card1.jpg'
    },
    {
      'title': 'タイトル2',
      'description': 'タイトル2の説明が入ります。',
      'image': '/images/production/card2.jpg'
    },
    {
      'title': 'タイトル3',
      'description': 'タイトル3の説明が入ります。',
      'image': '/images/production/card3.jpg'
    },
  ]

  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Typography component='h2' variant='h2'>
            Production
          </Typography>
        </Grid>
        {
          setMediaList.map((data) => {
            return (
              <Grid item xs={12} md={4}>
                <Box sx={{ width: "100%" }}>
                  <MediaCard title={data.title} description={data.description} image={data.image} />
                </Box>
              </Grid>
            )
          })
        }
        
        
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Button variant='contained' size='large'>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductionList