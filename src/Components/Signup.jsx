import { Button, TextField, Typography , Grid} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    const[inputs,setInputs]=useState({});
    const InputHandler =(e)=>{
        setInputs({...inputs, [ e.target.name]:e.target.value});
        console.log(inputs)
    }
    const SubmitHandler=()=>{
        console.log("btn clicked", inputs)
    }
  return (
    <div style={{margin:'10%'}}>
      
<Typography variant='h3' style={{color:"purple"}}>
    Signup form
    </Typography>

    <br /><br />
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Name" fullWidth name='name' onChange={InputHandler} />
        </Grid>


        
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Email" fullWidth  name='email' 
            onChange={InputHandler}/>
        </Grid>


        
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label="Address" fullWidth  multiline rows={5} name='address' onChange={InputHandler}/>
        </Grid>


       
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Username" fullWidth name='username' onChange={InputHandler}/>
        </Grid>


      
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' label="Password" fullWidth name='password' onChange={InputHandler}/>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
        <Button variant='contained' color='secondary' onClick={SubmitHandler}>Submit</Button>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
        <Link to ={'/login'}> back to login </Link>
        </Grid>
</Grid>


    </div>
  )
}

export default Signup
