import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Appbar from './Components/Appbar';
import { Link } from 'react-router-dom';

const Register = () => {
  const paperStyle = { padding: '15px 20px', width: 400, margin: '20px auto' };
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    if(name.length===0||password.length===0||age.length===0||city.length===0)
    {
      setError(true);
    }
    // eslint-disable-next-line no-sequences
    if(name,password,age,city)
    {
      e.preventDefault();
      const user = { name, password, age, city };
      console.log(user);
      fetch('http://localhost:8080/Partymember/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      }).then(() => {
        console.log('New User Added');
      });
    }
  };
  
  return (
    <container>
      <Appbar />
      <Paper elevation={3} style={paperStyle}>
        <h1> Maak een account aan</h1>
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
            name="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error&&name.length<=0?
          <label> Vul een gebruikersnaam in</label>: ""}
          <TextField
            id="standard-basic"
            label="Wachtwoord"
            variant="standard"
            name="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error&&password.length<=0?
          <label> Vul een wachtwoord in</label>: ""}
          <TextField
            type="number"
            id="standard-basic"
            label="Leeftijd"
            variant="standard"
            name="Age"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {error&&age.length<=0?
          <label> Vul je leeftijd in</label>: ""}
          <TextField
            id="standard-basic"
            label="Woonplaats"
            variant="standard"
            name="City"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {error&&city.length<=0?
          <label> Vul een woonplaats in</label> : ""}
          <Button variant="contained" class="btn" name="btn" onClick={handleClick}>
            Sla gegevens op
          </Button>
        </Box>
        <h5>
          <strong>Al een account?</strong> <br /> <br />
          <Link to="/Login"> Ga naar de login pagina </Link>
        </h5>
      </Paper>
    </container>
  );
};
export default Register;
