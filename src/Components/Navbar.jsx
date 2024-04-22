import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow:1}} > 
            BlogAPP
          </Typography>
          <Button><Link to={'/add'} style={{color:'white',textDecoration:'none'}}>add</Link>
            </Button>
          <Button ><Link to={'/view'} style={{color:'white',textDecoration:'none'}}>view</Link></Button>
          <Button style={{color:'white'}}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
