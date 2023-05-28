import React from 'react'
import './App.css'
import { Box } from '@mui/material'
import Footer from './components/Footer'
import Exercise from './pages/Exercise'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<Exercise/>}/>
        </Routes>
       <Footer/>
       </BrowserRouter>
      
    </Box>
   
  )
}

export default App
