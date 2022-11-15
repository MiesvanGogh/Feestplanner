import React, { useState }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Appbar from './Components/Appbar';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const CreateFeesten = () => {
  const paperStyle={padding: '15px 20px', width: 400, margin:"20px auto"}
  const[name, setName]=useState('');
  const[description, setDescription]=useState('');
  const [startTime, setStartTime] = useState(new Date());
  const[endTime, setEndTime]=useState(new Date());

  const handleClick=(e)=>{
    e.preventDefault()
    const party={name, description, startTime, endTime,}
    console.log(party)
    fetch("http://localhost:8080/User/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(party)
    }).then(()=>{
      console.log("New Party Added")
    })
  }

  return (
    <container> 
      <Appbar/>
      <Paper elevation={3} style={paperStyle}>
        <h1> Maak je eigen feest aan</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Geef je feest een naam" variant="standard" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="standard-basic" label="Feest beschrijving" variant="standard" fullWidth 
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
     <DateTimePicker
          label="Datum en starttijd"
          value={startTime}
          onChange={(e)=>setStartTime(e.target.value)}
          renderInput={(params) => <TextField {...params} />}
      />
     <DateTimePicker
          label="Datum en eindtijd"
          value={endTime}
          onChange={(e)=>setEndTime(e.target.value)}
          renderInput={(params) => <TextField {...params} />}
      />
    <Button variant="contained" onClick={handleClick}>Sla gegevens op</Button>
    </Box>
    </Paper>
    </container>
  );
}
export default CreateFeesten;
