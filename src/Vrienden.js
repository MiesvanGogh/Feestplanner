import React from 'react';
import { useState } from 'react';
import Appbar from './Components/Appbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Vrienden = () => {
  const paperStyle = { padding: '15px 20px', width: 400, margin: '20px auto' };
  const [users, setUsers] = useState([]);

  fetch('http://localhost:8080/Partymember/getAll')
    .then((response) => response.json())
    .then((json) => setUsers(json));

  return (
    <container>
      <Appbar />
      <Paper elevation={3} style={paperStyle}>
        <h1> </h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <table class="table">
            <thead class="header">
              <tr>
                <th scope="col"> Naam</th>
                <th scope="col"> Leeftijd</th>
                <th scope="col"> Woonplaats</th>
              </tr>
            </thead>
            {users.map((item) => {
              const Edit = () => {
                console.log('mies');
              };

              return (
                <tr class="TableInhoud" align="center">
                  <td>{JSON.stringify(item.name)}</td>
                  <td>{JSON.stringify(item.age)}</td>
                  <td>{JSON.stringify(item.city)}</td>
                  <td>
                    {' '}
                    <Button
                      className="Button"
                      onClick={() => {
                        Edit();
                      }}
                    >
                      Word vrienden
                    </Button>
                  </td>
                </tr>
              );
            })}
          </table>
        </Box>
      </Paper>
    </container>
  );
};
export default Vrienden;
