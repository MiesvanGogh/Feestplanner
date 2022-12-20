import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Appbar from './Components/Appbar';
import { Link } from 'react-router-dom';

const Login = () => {
  const paperStyle = { padding: '20px 20px', width: 400, margin: '20px auto' };
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const user = { name, password };
    console.log(user);
  };

  return (
    <container>
      <Appbar />
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
          <TextField
            id="standard-basic"
            label="Gebruikersnaam"
            variant="standard"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Wachtwoord"
            type="password"
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Login
          </Button>
        </Box>
        <h5>
          <strong>Nieuw bij feestplanner?</strong> <br /> <br />
          <Link to="/Register"> Maak een account aan </Link>
        </h5>
      </Paper>
    </container>
  );
};

export default Login;
