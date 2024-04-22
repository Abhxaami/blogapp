import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const[inputs,setInputs]=useState({});
    const InputHandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log("textfield",inputs)

    }
    const SubmitHandler=()=>{
        console.log("btn clicked", inputs)
    }
  return (
    <div style={{margin:'12%'}}>
        <Typography variant='h3' style={{color:'purple'}}>
            login form</Typography>
            <br></br>
            <Grid container spacing={2}>

            <Grid item xs={12} sm={12} md={12}>
                    <TextField variant='outlined' label='Username'  name='username' onChange={InputHandler}/>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <TextField variant='outlined' label='password'  name='password' onChange={InputHandler}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button variant='contained' color='secondary' onClick={SubmitHandler}>
                        Login
                    </Button>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                    <Link to={'/sign'}> NEW USER CLICK HERE
                        
                    </Link>
                    </Grid>

            </Grid>
        




    </div>
  )
}

export default Login
