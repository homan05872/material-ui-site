import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import MV from '../../assets/images/backgroud-dummy.jpg'
import SkillList from '../../components/SkillList'
import ProductionList from '../../components/ProductionList'
import ProfileList from '../../components/ProfileList'
import ContactForm from '../../components/ContactForm'

const Top: React.FC = () => {
  return (
    <>
      <Box sx={{ height: '65vh', backgroundImage: `url(${MV})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <Container maxWidth='md' sx={{ position: 'absolute', top: '24%', left: '50%', transform: 'translateX(-50%) translateY(-50%)' }}>
          <Grid container rowSpacing={2} columnSpacing={2} sx={{ textAlign: 'center', color: '#FFFFFF', textShadow: '1px 3px #616161' }}>
            <Grid item xs={12} md={12}>
              <Typography component='h2' variant='h2'>
                MVタイトル
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Typography>
            </Grid>
          </Grid>
        </Container>
            <Button variant='contained' size='large' sx={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>
              Learn More
            </Button>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <SkillList />
        </Container>
      </Box>

      
      <Box>
        <Container maxWidth='md'>
          <ProductionList/>
        </Container>
      </Box>
      

      <Box>
        <Container maxWidth='md'>
          <ProfileList />
        </Container>
      </Box>

      <Box>
        <Container maxWidth='md'>
          <ContactForm />
        </Container>
      </Box>
    </>
  )
}

export default Top