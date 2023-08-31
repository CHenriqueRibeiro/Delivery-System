import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import  './menu.css'
export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box id="containermenu">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab className='btnoptionsmenu' label="Promoção" />
        <Tab label="Pizza" />
        <Tab label="Hamburguer" />
        <Tab label="Pão Arabe" />
        <Tab label="Bebidas" />
        
      </Tabs>
    </Box>
  );
}