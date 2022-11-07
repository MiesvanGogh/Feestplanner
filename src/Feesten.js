import React, { useEffect, useState }  from 'react';
import Appbar from './Components/Appbar';
import Calendar from './Components/Calendar';
import {Link} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Feesten = () => {
  const paperStyle={padding: '20px 20px', width:400, margin:"20px auto" }
    // useEffect(()=>{
    //     fetch("http://localhost:8080/user/getAll")
    //     .then(res=>res.json())
    //     .then((result)=>{
    //       setUsers(result);
    //     }
    //   )
    //   },[])

      return (
          <container>
          <Appbar/>
          <Paper elevation={3} style={paperStyle}>
          FeestKalender
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
    <Calendar/>
    </Box>
    </Paper>

    </container>
      );
}
export default Feesten;