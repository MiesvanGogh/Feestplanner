import React from "react";
import Appbar from './Components/Appbar'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Vrienden = () => {
    const paperStyle={padding: '15px 20px', width: 400, margin:"20px auto"}
    return (
      <container> 
        <Appbar/>
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
        Je hebt nog geen vrienden.
      </Box>
      </Paper>
      </container>
    );
  }
export default Vrienden;