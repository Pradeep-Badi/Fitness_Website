import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import heroimg from '../assets/images/banner7.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}} }position='relative' p='20px'>
        <Typography color='#D51847' fontWeight='600' fontSize='26px'>
            Fitness Hub
        </Typography>
        <Typography fontWeight={700}sx={{fontSize :{lg :'44px',xs:'40px'}}}>
            Sweat,Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
           Check out the most effective exercises
        </Typography>
        
        <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor:'#063970',padding:'10px'}}>Explore Exercise</Button>
        <Typography fontWeight={600} color='#ff2625' sx={{opacity :0.1, display:{lg:'block',xs :'none'  }}} fontSize='200px'>
            Exercise

        </Typography>
        <img src={heroimg} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
