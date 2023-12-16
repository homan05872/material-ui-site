import React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import RadarChart from './RadarChart'


const SkillList = () => {

  const setSkllLists = [
    {
    
      labels: ['HTML / CSS', 'SASS / SCSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
      datasets: [
        {
          label: 'Froont-End',
          data: [3, 0, 1, 2, 1, 1],
          fill: true,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    {
    
      labels: ['Python', 'Django', "Java", "SpringBoot", 'Ruby', 'Ruby on Rails', ],
      datasets: [
        {
          label: 'Back-End',
          data: [2, 3, 3, 2, 1, 1],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    },
    {
    
      labels: ['AWS', 'Git', 'Docker', 'Linux', 'windows', 'nginx'],
      datasets: [
        {
          label: 'DevOps',
          data: [2, 3, 1, 2, 3, 1],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
  ];

  const setSkillChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display : false
      }
    },
    scale: {
      r:{
        max: 3,
        min: 0,
        ticks: {
          stepSize: 1
        }
      }
    }
  }

  return (
    <>
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
        <Typography component='h2' variant='h2'>
          Skill
        </Typography>
      </Grid>
      { setSkllLists.map((data) => {
          return (
            <Grid item xs={12} md={4}>
              <Box sx={{ width: '100%' , height: {xs: '400px', md:'200px'} }}>
                <RadarChart options={setSkillChartOptions} data={data}/>
              </Box>
            </Grid>
          );      
      })}
      <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
        <Button variant='contained' size='large'>
          Learn More
        </Button>
      </Grid>
    </Grid>
    </>
  )
}

export default SkillList