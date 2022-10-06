import React, { useState }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

export function Login() {
  const paperStyle={padding: '50px 20px', width:400, margin:"20px auto"}
  const[name, setName]=useState('');
  const[password, setPassword]=useState('');

  const handleClick=(e)=>{
    e.preventDefault()
    const user={name, password}
    console.log(user)
  }

  return (
    <container> 
      <Paper elevation={3} style={paperStyle}>
        <h1>Login</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Gebruikersnaam" variant="standard" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="standard-basic" label="Wachtwoord" variant="standard" fullWidth 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
    <Button variant="contained" onClick={handleClick}>Login</Button>
    </Box>
    </Paper>
    </container>
  );
}
