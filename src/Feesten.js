import React, { useEffect, useState }  from 'react';
import Appbar from './Components/Appbar'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Feesten = () => {
    const[users, setUsers]=useState([])
    const paperStyle={padding: '20px 20px', width:400, margin:"20px auto"}

    useEffect(()=>{
        fetch("http://localhost:8080/user/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setUsers(result);
        }
      )
      },[])

      return (
        <container>
          <Appbar/> 
          <Paper elevation={3} style={paperStyle}>
            <h1>Alle Feesten</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
            <h1> Bas</h1>
            <h1> Jasper</h1>
            <h1> Mies</h1>
            <h1> Yannick</h1>
        </Box>
        </Paper>
        </container>
      );
}
export default Feesten;