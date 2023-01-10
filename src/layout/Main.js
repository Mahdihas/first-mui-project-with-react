import { Box, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Main = () => {
  return (
    <Box>
    <Container>
       <Header />
       <Outlet />
    </Container>
   
 </Box>
  )
}

export default Main