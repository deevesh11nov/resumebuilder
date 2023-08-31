

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


const buttons = [
  <Button key="one">Personal Info</Button>,
  <Button key="two">Work Experience</Button>,
  <Button key="three">Education</Button>,
  <Button key="four">Key Skills</Button>,
];

export default function DetailNavbar() {
  return (
    <Box sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      {/* <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup> */}
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
      {/* <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup> */}
    </Box>
  );
}