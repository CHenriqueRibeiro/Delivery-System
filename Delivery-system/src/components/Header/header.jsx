import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './header.css'
export default function SimpleContainer() {
  return (
    <React.Fragment  >
      <CssBaseline />
      <Container maxWidth="sm"  >
        <Box className="containerheader"  />
      </Container >
    </React.Fragment>
  );
}