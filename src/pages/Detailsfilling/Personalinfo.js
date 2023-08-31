import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import'./Personalinfo.css';
import download from '../download.jpeg'
import ButtonGroup from '@mui/material/ButtonGroup';
          
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function Personalinfo() {
  return (
    <>
    <div className='profile'><img src={download} alt="Avatar" ></img>
    
    </div>
   
    <Stack direction="centre" spacing={2} style={{ marginLeft:"270px" }}>
    <Button>change profile photo</Button>
    </Stack>
    
    <div className='personal-container'>
    
    <Box component="form"
      sx={{
        '& .MuiTextField-root': {
             m: 3, 
             width: '35ch'
             },
      }}
      
  
    >

        <TextField First Name id="outlined-required" label="First Name" defaultValue="Hello World" />
           <TextField id="outlined-disabled" label="Last Name" defaultValue="Hello World"/><br></br>
             <TextField id="outlined-number"label="Email"  defaultValue="abc@gmail.com"
                   InputLabelProps={{ shrink: true, }}/>
                    <TextField id="outlined-number"label="Mobile" type="abc@gmail.com"
                     InputLabelProps={{ shrink: true, }}/><br></br>
             
             <TextField First Name id="outlined-required" label="Address" defaultValue="Hello World" style={{marginLeft:'-320px'}} /><br></br>
             <TextField First Name id="outlined-required" label="City" defaultValue="Hello World" />
             <TextField First Name id="outlined-required" label="State" defaultValue="Hello World" /><br></br>
             <TextField First Name id="outlined-required" label="Postal code" defaultValue="Hello World"style={{marginLeft:'-320px'}}/><br></br>
             <TextField First Name id="outlined-required" label="Objective" defaultValue="Hello World"style={{marginLeft:'-170px', width:'450px'}} /><br></br>
 
                <div className='buttoncontainer'>
             <ButtonGroup variant="saperate" aria-label="outlined primary button group" style={{ marginLeft:"500px",border:'10px',background:"skyblue",}}>
                <Button>Back</Button>
                <Button>Next</Button>
                
                </ButtonGroup>
                </div>


   
      
      
  


    </Box>
    </div>
    </>
  );
}

export default Personalinfo
 