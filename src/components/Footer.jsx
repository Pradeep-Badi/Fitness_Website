import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/images/logo22.png'

const Footer = () => {
  return (
   <Box mt='80x' bgcolor='#fff3f4'>  
    <Stack gap='40px'alignItems='center' px='40px' pt='24px'>
      <img src={logo} alt="logo" width='300px' height='50px' />
      <Typography variant='h5'  pb='40px' mt='20px'>
        Nothing Will Work Unless You Do...

      </Typography>

    </Stack>

   </Box>
  )
}

export default Footer
