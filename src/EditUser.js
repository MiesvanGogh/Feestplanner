import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Appbar from './Components/Appbar';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const EditUser = () => {
    const uselocation = useLocation();
  const paperStyle = { padding: '15px 20px', width: 400, margin: '20px auto' };
  const [id, setID] = useState(uselocation.state.id);
  const [name, setName] = useState(uselocation.state.name);
  const [password, setPassword] = useState(uselocation.state.password);
  const [age, setAge] = useState(uselocation.state.age);
  const [city, setCity] = useState(uselocation.state.city);
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
      const user = { id, name, password, age, city };
      console.log(user);
      fetch('http://localhost:8080/Partymember/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })      
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
    }
  };
  
  return (
    <container>
      <Appbar />
      <Paper elevation={3} style={paperStyle}>
        <h1> Update het account van {uselocation.state.name}</h1>
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
            variant="standard"
            name="Name"
            fullWidth
            defaultValue={uselocation.state.name}
            onChange={(e) => setName(e.target.value)}
          />
          {error&&name.length<=0?
          <label> Vul een gebruikersnaam in</label>: ""}
          <TextField
            id="standard-basic"
            variant="standard"
            name="Password"
            fullWidth
            defaultValue={uselocation.state.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error&&password.length<=0?
          <label> Vul een wachtwoord in</label>: ""}
          <TextField
            type="number"
            id="standard-basic"
            variant="standard"
            name="Age"
            fullWidth
            defaultValue={uselocation.state.age}
            onChange={(e) => setAge(e.target.value)}
          />
          {error&&age.length<=0?
          <label> Vul je leeftijd in</label>: ""}
          <TextField
            id="standard-basic"
            variant="standard"
            name="City"
            fullWidth
            defaultValue={uselocation.state.city}
            onChange={(e) => setCity(e.target.value)}
          />
          {error&&city.length<=0?
          <label> Vul een woonplaats in</label> : ""}
          <Button variant="contained" class="btn" name="btn" onClick={handleClick}>
            Sla gegevens op
          </Button>
        </Box>
      </Paper>
    </container>
  );
};
export default EditUser;
